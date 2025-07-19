import * as fs from 'node:fs/promises';
import path from 'node:path';
// import { fileURLToPath } from 'node:url';

export function readMovies() {
  console.log(import.meta.dirname);
  console.log(import.meta.filename);
  console.log(import.meta.url);
  // console.log(fileURLToPath(import.meta.url));

  // const dirname = path.dirname(fileURLToPath(import.meta.url));

  const filePath = path.join(import.meta.dirname, 'movies.txt');

  console.log(filePath);
  return fs.readFile(filePath, { encoding: 'utf-8' });
}

export default {
  readMovies,
};
