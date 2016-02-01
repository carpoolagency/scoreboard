var http = require('http');
var express = require('express');
var app = express();
var players = [{ name: 'Esteban', score: 0 },
              { name: 'Other Player', score: 0 }];

app.use(express['static'](__dirname ));

// Express route for incoming requests for a customer name
app.get('/players/:id', function(request, response) {
  response.status(200).send(players[request.params.id]);
});

app.put('/players/:id/increaseScore', function(request, response) {
  console.log("request to increase score of player with id", request.params.id);
  if(request.params.id != 1 && request.params.id  != 0) {
    // 406 status is 'not acceptable' https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
    console.log("There's no player with this id");
    response.status(406).send("There is no player with id: " + request.params.id);
  } else {
    console.log("Attempting to increase score");
    players[request.params.id].score += 1;
    response.status(200).send();  
  }
});

app.put('/players/:id/decreaseScore', function(request, response) {
  console.log("going to decrease score of player ", players[request.params.id]);
  response.status(200).send();  
});

//TODO: implement reset function

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

app.listen(3000);
console.log('Listening on port 3000');
