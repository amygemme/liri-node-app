require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');


var spotify = new Spotify(keys.spotify);

// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     {
//       type: "checkbox",
//       radio: "yes",
//       name: "choice",
//       message: "What would you like to do?",
//       choices: ["concert-this","spotify-this-song","movie-this", "do-what-it-says"]
//     },
//   ])
//   .then(answers => {
//     console.log(answers);
//   });

// ============ Movie Code =============// 

if (process.argv[2] === "movie-this") {
var fullname = "Matrix";

var axios = require("axios");

axios.get("http://www.omdbapi.com/?t=" + fullname + "&y=&plot=short&apikey=337d7ea4").then(
  function (response) {
   console.log(response.data.Title);
   console.log(response.data.Year);
   console.log(response.data.imdbRating);
   console.log(response.data.Language);
   console.log(response.data.Country);
   //  I am not sure where to get the rotten tomatoes rating data (skipping for now!)
   //console.log(response.data.Ratings);
    


  })
}


// ======== Spotify Code =========== //

if (process.argv[2] === "spotify-this-song") 
{
  if (process.argv[3] === undefined) {
    spotify.search({ type: 'track', query: "The Sign Ace of Base", limit: 1 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    
      let items = data.tracks.items[0];
      let artist = items.artists[0];
      let album = items.album;
      console.log("artist: " + artist.name);
      console.log("Album: " + album.name);
      console.log("link to track: " + items.external_urls.spotify);
      console.log("Track: " + items.name);

          });
  }
  else{
    let song = process.argv[3];
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    let items = data.tracks.items[0];
    let artist = items.artists[0];
    let album = items.album;
    console.log("artist: " + artist.name);
    console.log("Album: " + album.name);
    console.log("link to track: " + items.external_urls.spotify);
    console.log("Track: " + items.name);
  
  });
}
}
 //spotify.search = function({ type: 'artist OR album OR track', query: 'rebel yell', limit: 2 }, callback)


// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
// 
