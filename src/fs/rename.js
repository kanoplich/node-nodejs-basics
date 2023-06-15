import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { rename as renameFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  try {
    const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = join(__dirname, 'files', 'properFilename.md');

    await renameFile(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();