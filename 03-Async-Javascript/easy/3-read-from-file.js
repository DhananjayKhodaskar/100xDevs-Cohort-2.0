const fs = require('node:fs');

fs.readFile('../files/3-read-from-file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});