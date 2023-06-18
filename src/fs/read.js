import {fileURLToPath} from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const contents  = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();