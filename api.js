var http = require('http');
var express = require('express');

var app = express();

var inputs = [{ player: 'Kevin', score: -14 },
              { player: 'Esteban', score: 8291 }];

app.use(express['static'](__dirname ));

// Express route for incoming requests for a customer name
app.get('/inputs/:id', function(req, res) {
  res.status(200).send(inputs[req.params.id]);
});

// Express route for any other unrecognized incoming requests
app.get('*', function(req, res) {
  res.status(404).send('Unrecognized API call');
});

// Express route to handle errors
app.use(function(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send('Oops, something went wrong!');
  } else {
    next(err);
  }
});

// Express route to increase score
app.get('inputsScore/:id', function(req, res) {
  inputs[2].score += 1;
  res.status(200).send(inputs[req.params.id]);
});

app.listen(3000);
console.log('Listening on port 3000');
