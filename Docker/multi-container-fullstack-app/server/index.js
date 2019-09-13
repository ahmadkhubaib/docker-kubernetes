const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
// const { Pool } = require('pg');
const { Client } = require('pg');
const conString = "postgres://postgres:mypassword@localhost:5432/postgres";
const pgClient = new Client(conString)

// const pgClient = new Pool({
//   user:  'postgres',
//   host: 'localhost',
//   // database: keys.pgDatabase || 'postgres',
//   // password: keys.pgPassword || 'postgres_password',
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
  
// });
// pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(err => console.log(err));

// Redis Client Setup
const redis = require('redis');
const redisClient = redis.createClient({
  host: keys.redisHost,
  retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();

// Express route handlers

app.get('/', (req, res) => {
  console.log('in /' )
  res.send('Hi');
});

app.get('/values/all', async (req, res) => {
  console.log('in / values/all' )
  const values = await pgClient.query('SELECT * from values');

  res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
  console.log('in / values/current' )
  redisClient.hgetall('values', (err, values) => {
    res.send(values);
  });
});

app.post('/values', async (req, res) => {
  console.log('in / values' )
  const index = req.body.index;

  if (parseInt(index) > 40) {
    return res.status(422).send('Index too high');
  }

  redisClient.hset('values', index, 'Nothing yet!');
  redisPublisher.publish('insert', index);
  pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

  res.send({ working: true });
});

app.listen(5000, err => {
  console.log('Listening');
});
