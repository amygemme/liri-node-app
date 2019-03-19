var fullname = "Matrix";

var axios = require("axios");

axios.get("http://www.omdbapi.com/?t=" + fullname + "&y=&plot=short&apikey=337d7ea4").then(
  function(response) {
      console.log(response);
})



// PAste code here

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "288adfa9531e4224bd3fd5e770072f54",
  secret: "20cfebf72a824037bb0887bd9bd958b6"
});
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });