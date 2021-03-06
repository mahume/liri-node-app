const nodeSpotifyAPI = require('../api/nodeSpotifyAPI');
const chalkStyling = require('../utils/chalkStyling');

const { makeBoldBlue, makeBoldUnderline } = chalkStyling;

const searchSong = async query => {
  // Styling
  const resultsFor = makeBoldUnderline('Results For:');
  const searchQuery = makeBoldBlue(query);
  // API
  try {
    const response = await nodeSpotifyAPI(query);
    const { name, preview_url, album } = response.tracks.items[0];
    // Display
    console.log(`
      ${resultsFor}      ${searchQuery}`);
    console.log(`
      Artist:           ${album.artists[0].name}
      Track:            ${name}
      Preview:          ${preview_url || 'Unavailable'}
      Album:            ${album.name}
      `);
  } catch (error) {
    console.log(`
      Hmm... I'm unable to find the song ${searchQuery}
    `);
  }
};

module.exports = searchSong;
