// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// #1: Define a `Playlist` class with the following properties:
// - a `title` property that is a string determined by some input (passed into the constructor)
// - a `songs` property that is an empty array not determined by input (not passed into the constructor)
// - an `addSong` method that adds a song (string) to the `songs` array
// Type your solution immediately below this line:
class Playlist {
  constructor(title) {
    this.title = title;
    this.songs = [];
  }
  addSong(song) {
    this.songs.push(song);
  }
}




// #2: Create an instance of the Playlist class and set it to a variable called `myPlaylist`
// Call the instance's `addSong` method to add a song to the instance's `songs` array
// Type your solution immediately below this line:

var myPlaylist = new Playlist("Joe's Faves");
myPlaylist.addSong("Break it Down Again");



// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if(typeof Playlist !== 'undefined') {
  module.exports = {
    Playlist
  }
}
