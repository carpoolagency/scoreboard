window.onload = function () {
  var url,
      jqxhr;

    url1 = document.URL + 'players/0';
    url2 = document.URL + 'players/1';
    jqxhr = $.getJSON(url1, function(data) {
      console.log('API for P1 response received');

      $('#player1Name').html('Player ' + data['name']);
      $('#player1Score').html(data['score'] + ' points');
    });

    jqxhr = $.getJSON(url2, function(data) {
      console.log('API for P2 response received');
      $('#player2Name').html('Player ' + data['name']);
      $('#player2Score').html(data['score'] + ' points');
    });
};


function increaseScore(id) {
  var url = document.URL + 'players/' + id + '/increaseScore';
  $.ajax({
    url: url,
    type: 'PUT',
    success: function(result) {
      console.log('Increased the score!');
      updateScore(id);
    }
  });
}

function updateScore(id) {
  var url = document.URL + 'players/' + id;
  $.getJSON(url, function(data) {
    $('#player' + id + 'Score').hide().html(data['score']).fadeIn('fast');
  });
} 

