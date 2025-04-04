const fs = require('fs');
const path = require('path');

const directory = '../public/images/projects/2024'; // Replace with your directory
let count = 1;

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  files
    .filter((file) => path.extname(file) === '.jpg')
    .forEach((file) => {
      const newFileName = `2024-${count}.jpg`;
      fs.rename(
        path.join(directory, file),
        path.join(directory, newFileName),
        (err) => {
          if (err) throw err;
          console.log(`Renamed: ${file} -> ${newFileName}`);
        }
      );
      count++;
    });
});
