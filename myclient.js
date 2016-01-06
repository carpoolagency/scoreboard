window.onload = function () {
  var url, 
      i,
      jqxhr;

  for (i = 0; i < 2; i++) {
    url = document.URL + 'inputs/' + i;
    jqxhr = $.getJSON(url, function(data) {
      console.log('API response received');
      $('#input').append('<p>Player ' + data['player'] + ' has ' +
        data['score'] + ' points.</p>');
    });
  }
};

/*
function increaseScore() {
  var url,
      i,
      jqxhr;

  for (i = 0; i < 2; i++) {
    url = document.URL + 'inputsScore/' + i;
    jqxhr = $.getJSON(url, function(data) {
      console.log('API response received');
      $('#input').append('<p>Player ' + data['player'] + ' has ' +
        data['score'] + ' points.</p>');   
  });
}
*/
