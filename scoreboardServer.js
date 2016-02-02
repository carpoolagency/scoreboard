var http = require('http');
var express = require('express');
var app = express();
var players = [{
    name: 'Player 1',
    score: 0
}, {
    name: 'Player 2',
    score: 0
}];

app.use(express['static'](__dirname));

// Express route for incoming requests for a customer name
app.get('/players/:id', function(request, response) {
    response.status(200).send(players[request.params.id]);
});


app.put('/players/:id/increaseScore', function(request, response) {
  adjustScore(request, response, 1);
});

app.put('/players/:id/decreaseScore', function(request, response) {
  adjustScore(request, response, -1);
});

app.put('/players/resetScores', function(request, response) {
    console.log("request to resetScores");
    players[0].score = 0;
    players[1].score = 0;
    response.status(200).send(players);
});

function adjustScore(request, response, deltaPoint) {
    console.log("request to change score of player with id", request.params.id);  
    if (request.params.id != 1 && request.params.id != 0) {
        // 406 status is 'not acceptable' https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
        console.log("There's no player with this id");
        response.status(406).send("There is no player with id: " + request.params.id);
    } else {
        console.log("going to change the score of player ", players[request.params.id]);
        players[request.params.id].score += deltaPoint;
        response.status(200).send(players[request.params.id].score.toString());      
    }
}

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
