import { fileURLToPath } from 'url'
import { dirname, join } from 'path';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const filePath = join(__dirname, 'files');

  try {
    const files = await readdir(filePath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();