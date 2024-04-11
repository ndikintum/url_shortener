
# CLI URL Shortener 

CLI URL Shortener is a command-line interface (CLI) tool for shortening URLs using the Bitly API and saving them into a database.

## Installation

1. Clone this repository to your local machine:

```bash
   git clone https://github.com/ndikintum/url_shortener.git
   ```

2. Navigate to the project directory:

```bash
   cd url_shortener
   ```

3. Install dependencies using npm:

```bash
   npm install
   ```
4. In the project directory, open your terminal and run 
```bash
   npm install -g
   ``` 

4. Set up your environment variables by creating a `.env` file in the root directory of the project:

## Usage

To shorten a URL, run the following command:
Example

```bash
 <url_shortener shorten>
```
You will be prompted to enter the URL as such <Enter the long URL:>
This will output the shortened URL and save it into the database.

To list a URL, run the following command:
Example

```bash
url_shortener list
```

To get help , run the following command:
Example

```bash
url_shortener --help
```

This will output the list of shortened URLs saved into the database.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for making requests to the Bitly API.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [sequelize](https://www.npmjs.com/package/sequelize): ORM for interacting with databases.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
