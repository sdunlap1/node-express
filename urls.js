const fs = require('fs');
const axios = require('axios');
const path = require('path');

async function fetchAndSave(url) {
  try {
    const response = await axios.get(url);
    const hostname = new URL(url).hostname;
    fs.writeFileSync(`${hostname}`, response.data);
    console.log(`Wrote to ${hostname}`);
  } catch (error) {
    console.error(`Couldn't download ${url}`);
  }
}

function readUrlsFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf-8');
    const urls = data.split('\n').filter(line => line.trim() !== '');
    return urls;
  } catch (error) {
    console.error(`Error reading file: ${filename}`);
    process.exit(1);
  }
}

async function main() {
  if (process.argv.length !== 3) {
    console.error('Usage: node urls.js FILENAME');
    process.exit(1);
  }

  const filename = process.argv[2];
  const urls = readUrlsFromFile(filename);

  const fetchPromises = urls.map(url => fetchAndSave(url));
  await Promise.all(fetchPromises);
}

main();
