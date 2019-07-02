const displayCommands = require('./src/helpers/displayCommands');
const searchConcert = require('./src/helpers/searchConcert');
const searchSong = require('./src/helpers/searchSong');
const searchMovie = require('./src/helpers/searchMovie');
const searchTextFile = require('./src/helpers/searchTextFile');

const cliriCommand = process.argv[2];
const searchQuery = process.argv.slice(3).join(' ');

switch (cliriCommand) {
  case 'concert':
    searchConcert(searchQuery);
    break;
  case 'song':
    searchSong(searchQuery);
    break;
  case 'movie':
    searchMovie(searchQuery);
    break;
  case 'text':
    searchTextFile();
    break;
  default:
    displayCommands();
    break;
}
