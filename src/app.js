const express = require('express');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  console.log(req.params.string);

  res.status(200).send({ result: `Hello, ${req.params.string}!` });
});

module.exports = app;
