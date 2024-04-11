// Import necessary modules
const { shortenUrl } = require('./shortener_services');
const Urls = require('./schema/Urls');

// Function to handle CLI input and output
async function main() {
  try {
    // Get long URL from CLI arguments
    const longUrl = process.argv[2];

    // Check if long URL is provided
    if (!longUrl) {
      console.error('Please provide a long URL as input.');
      return;
    }

    // Shorten the URL
    const shortenedUrl = await shortenUrl(longUrl);

    // Output shortened URL
    console.log('Shortened URL:', shortenedUrl);

    // Save the shortened URL into the database
    const urlRecord = await Urls.create({ longUrl, shortenedUrl });
    console.log('Shortened URL saved into the database:', urlRecord);

  } catch (error) {
    console.error(error.message);
  }
}

// Call main function
main();
