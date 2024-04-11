#!/usr/bin/env node

// Import necessary modules
const { shortenUrl } = require('./shortener_services');
const Urls = require('./schema/Urls');
const axios = require('axios');

// Function to handle CLI input and output
async function main() {
  try {
    const args = process.argv.slice(2);
    const command = args[0];

    if (command === '--help') {
      // Display usage instructions
      console.log('Usage:');
      console.log('  <url_shortener shorten> and when prompted add <Url> and press enter - To Shorten a URL');
      console.log('  url_shortener list - To List stored shortened URLs');
      console.log('  url_shortener --help - To Display usage instructions');
      return;
    }

    if (command === 'shorten') {
      // Prompt the user for the long URL
      const longUrl = await promptInput('Enter the long URL: ');

      // Check if long URL is provided
      if (!longUrl) {
        console.error('Please provide a long URL.');
        return;
      }

      // Shorten the URL
      const shortenedUrl = await shortenUrl(longUrl);

      // Output shortened URL
      console.log('Shortened URL:', shortenedUrl);

      // Save the shortened URL into the database
      const urlRecord = await Urls.create({ longUrl, shortenedUrl });
      console.log('Shortened URL saved into the database:', urlRecord);
    } else if (command === 'list') {
      // Function to list stored URLs
      async function listUrls() {
        try {
          const urls = await Urls.findAll();
          console.log('List of stored shortenUrls:');
          urls.forEach(url => {
            console.log(`${url.longUrl} - ${url.shortenedUrl}`);
          });
        } catch (error) {
          console.error('Error retrieving URLs:', error);
        }
      }

      // Call function to list stored URLs
      await listUrls();
    } else {
      console.error('Invalid command. Please use "shorten" or "list".');
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Function to prompt user input
function promptInput(question) {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(question, (input) => {
      resolve(input);
      readline.close();
    });
  });
}

// Call main function
main();
