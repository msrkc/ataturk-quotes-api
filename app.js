const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

const turkish = require('./quotes-tr.json');
const english = require('./quotes-en.json');

const respond = lang => {
  return {
    quote: lang[Math.floor(Math.random() * lang.length)]
  };
};

app.get('/tr', (req, res, next) => {
  res.send(respond(turkish));
});

app.get('/en', (req, res, next) => {
  res.send(respond(english));
});

app.use(express.static('public'));

const listener = app.listen(process.env.PORT || 1881, () => {
  console.log('App is running on port %d', listener.address().port);
});
