const chalkStyling = require('../utils/chalkStyling');

const {
  makeGreen,
  makeBoldBlue,
  makeBoldRed,
  makeBoldUnderline,
  makeItalic,
} = chalkStyling;

const displayCommands = () => {
  // Styling
  const searchFor = makeBoldUnderline('Search For:');
  const command = makeBoldRed('Command');
  const searchQuery = makeBoldBlue('Search Query');
  const searchSyntax = makeItalic('Search Syntax:');
  const nodePath = makeGreen('node src/cliri.js');
  // Display
  console.log(`
    ${searchFor}       ${command}                ${searchQuery}`);
  console.log(`
    Concerts          concert            +   <artist/band name>
    Songs             song               +   <song name>
    Movies            movie              +   <movie title>
    Text file         text`);
  console.log(`
    ${searchSyntax}    ${nodePath} ${command} ${searchQuery}
  `);
};
module.exports = displayCommands;
