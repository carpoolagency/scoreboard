window.onload = function() {
  var url,
      jqxhr;

  url1 = document.URL + 'players/0';
  url2 = document.URL + 'players/1';
  jqxhr = $.getJSON(url1, function(data) {
      console.log('API for P1 response received');

      $('#player1Name').html(data['name']);
      $('#player1Score').html(data['score']);
  });

  jqxhr = $.getJSON(url2, function(data) {
      console.log('API for P2 response received');
      $('#player2Name').html(data['name']);
      $('#player2Score').html(data['score']);
  });
};

function increaseScore(id) {
  var url = document.URL + 'players/' + id + '/increaseScore';
  $.ajax({
      url: url,
      type: 'PUT',
      success: function(result) {
          console.log('Increased the score!');
          // Update the score in HTML
          $('#player' + (id + 1) + 'Score').hide().html(result).fadeIn('fast');
      }
  });
}

function decreaseScore(id) {
  var url = document.URL + 'players/' + id + '/decreaseScore';
  $.ajax({
      url: url,
      type: 'PUT',
      success: function(result) {
          console.log('Increased the score!');
          // Update the score in HTML
          $('#player' + (id + 1) + 'Score').hide().html(result).fadeIn('fast');
      }
  });
}
