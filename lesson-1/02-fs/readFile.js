const fs = require('node:fs/promises');

fs.readFile('read.txt', { encoding: 'utf8' })
  .then((data) => {
    console.log({ data, length: data.length });
  })
  .catch((err) => {
    console.error(err);
  });
