'use strict';

const fs = require('fs');
const path = require('path');

const copyingFile = (file, copyFile) => {
  if (file === copyFile) {
    return;
  }

  const pathOne = path.join(__dirname, file);
  const pathTwo = path.join(__dirname, copyFile);

  if (!fs.existsSync(pathOne)) {
    throw new Error('File does not exist');
  }

  try {
    const dataFile = fs.readFileSync(pathOne, 'utf-8');

    fs.writeFileSync(pathTwo, dataFile);
  } catch (error) {
    throw new Error(error);
  }
};

copyingFile('file.txt', 'copyFile.txt');
