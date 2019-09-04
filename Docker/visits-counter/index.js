const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();
client.set("visits", 0);
app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    if (err) {
      res.send({ Error: err.message });
    }
    res.send({ visits: visits });
    client.set("visits", visits + 1);
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
