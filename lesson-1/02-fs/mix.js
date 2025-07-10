const fs = require('node:fs/promises');

fs.readFile('read.txt')
  .then((data) => {
    console.log(data);
    return data;
  })

  .then((data) => fs.writeFile('out.txt', data))
  .then(() => {
    console.log('File updated successfully');
  })
  .catch((error) => {
    console.error(error);
  });
