const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server"
});
client.set("visits", 0);
app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    if (err) {
      res.send({ Error: err.message });
    }
    res.send({ visits: visits });
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
