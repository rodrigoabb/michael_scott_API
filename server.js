const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const fs = require('fs');

let MS_QUOTES = [];

function readQuotesFile () {
   fs.readFile('./quotes.txt', 'utf8', function(err, data) {
      if (err) throw err;
      MS_QUOTES = data.split('\n');
   });
}

readQuotesFile();

app.listen(port);
console.log(`Server started on Port: ${port} `);
console.log('Request to /randomQuote to receive a Michael Scott quote');


// API

app.get('/', function (req, res) {
   res.json({ title: 'Hey', message: 'Hello there!'});
});

app.get('/randomQuote', function (req, res) {
   res.json({ quote: MS_QUOTES[Math.floor(Math.random() * MS_QUOTES.length)], author: 'Michael Scott'});
});

