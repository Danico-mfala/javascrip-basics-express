const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,

} = require('./lib/strings')
const app = express();

app.get('/strings/hello/:string', (req, res) => {
  console.log(req.params.string);

  res.status(200).json({ result: sayHello(req.params.string) });
  
});

app.get('/strings/hello/:string', (req, res) => {
  console.log(req.params.string);

  res.status(200).json({ result: sayHello(req.params.string) });
  
});

app.get('/strings/upper/:turtle', (req, res) => {
  console.log(req.params.turtle);

  res.status(200).json({ result: uppercase(req.params.turtle)});
  
});

app.get('/strings/lower/:turtle', (req, res) => {
  console.log(req.params.turtle);

  res.status(200).json({ result: lowercase(req.params.turtle)});
  
});
app.get('/strings/first-characters/:turtle', (req, res) => {
  console.log(req.params.turtle);
  const string = req.params.string;
  const query = parseInt(req.query.length);

  res.status(200).json({ result: firstCharacter(req.params.turtle)});
  
});


module.exports = app;
