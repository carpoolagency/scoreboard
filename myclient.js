window.onload = function () {
  var url,
      jqxhr;

    url1 = document.URL + 'inputs/0';
    url2 = document.URL + 'inputs/1';
    jqxhr = $.getJSON(url1, function(data) {
      console.log('API for P1 response received');

      $('#player1Score').append('<p>Player ' + data['name'] + ' has ' +
        data['score'] + ' points.</p>');
    });

    jqxhr = $.getJSON(url2, function(data) {
      console.log('API for P2 response received');
      $('#player2Score').append('<p>Player ' + data['name'] + ' has ' +
        data['score'] + ' points.</p>');
    });
};


function increaseScore1() {
  var url = document.URL + 'inputsScore/0';
  var jqxhr = $.getJSON(url, function(data) {
    console.log('trying to increase score for player 1');
  });
  updateScore(0);
}

function updateScore(id) {
  var url = document.URL + 'inputsScore/' + id;
  var jqxhr = $.getJSON(url, function(data) {
    var selector;
    if(id === 0) {
      selector = '#player1Score';
    }

    if(id == 1) {
      selector = "#player2Score";
    }

    $(selector).append('<p>Player ' + data['name'] + ' has ' +
        data['score'] + ' points.</p>');
  });
} 

