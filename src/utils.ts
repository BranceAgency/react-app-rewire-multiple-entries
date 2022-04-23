import fs from 'fs';

export const formatName = function (name: string) {
  if (!name) {
    name = '';
  }
  return (
    name
      .split('/')
      .reverse()[0]
      .match(/^[^.]*/)[0]
  );
};

export const checkFileExist = function (file: string) {
  if (!fs.existsSync(file)) {
    throw new Error('File not found: ' + file);
  }
};
