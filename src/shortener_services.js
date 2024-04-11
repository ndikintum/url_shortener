const axios = require('axios');
require('dotenv').config();

async function shortenUrl(longUrl) {
  try {
    // Make POST request to Bitly API
    const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
      long_url: longUrl
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    // Extract shortened URL from response data
    return response.data.link;

  
  } catch (error) {
    console.error('Error shortening URL:', error.response.data.description);
    throw new Error('Error shortening URL');
  }
}

module.exports = { shortenUrl };
