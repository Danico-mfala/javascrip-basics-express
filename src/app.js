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
  
  res.status(200).json({ result: sayHello(req.params.string) });
  
});

app.get('/strings/hello/:string', (req, res) => {
  

  res.status(200).json({ result: sayHello(req.params.string) });
  
});

app.get('/strings/upper/:turtle', (req, res) => {
 

  res.status(200).json({ result: uppercase(req.params.turtle)});
  
});

app.get('/strings/lower/:turtle', (req, res) => {
  

  res.status(200).json({ result: lowercase(req.params.turtle)});
  
});
app.get('/strings/first-character/:str', (req, res) => {
  res.status(200).json({ result: firstCharacter(req.params.str) });
});
app.get('/strings/first-characters/:str', (req, res) => {
  console.log(req.params.str);
  const string = req.params.str;
  const query = parseInt(req.query.length);
  console.log(firstCharacters(string, query));
  res.status(200).json({ result: firstCharacters(string, query)});
  
});

// numbers

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num2, num1) });
  }
});

module.exports = app;
