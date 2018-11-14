var searchYouTube = (optionsInput, callback) => {

  var options = {
    key: optionsInput.key,
    maxResults: optionsInput.max,
    q: optionsInput.query,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
  };

  $.getJSON('https://www.googleapis.com/youtube/v3/search', options, function(data) {
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;