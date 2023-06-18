import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { rename as renameFile, access, constants } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = join(__dirname, 'files', 'properFilename.md');

  try {
    await access(newPath, constants.F_OK);
    throw new Error();
  } catch (err) {
    if(err.code === 'ENOENT') {
      try {
        await renameFile(oldPath, newPath);
      } catch {
        throw new Error('FS operation failed');
      }
    } else {
      throw new Error('FS operation failed');
    }
  }
};

await rename();