import { dirname, join } from 'path';
import { copyFile, readdir, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const filePath = join(__dirname, 'files');
  const dirPath = join(__dirname, 'files_copy');

  try {
    await mkdir(dirPath);
    const files = await readdir(filePath);

    for(const file of files) {
      const pathFrom = join(filePath, file);
      const pathTo = join(dirPath, file);

      await copyFile(pathFrom, pathTo);
    }
  } catch {
    throw new Error('FS operation failed');
  }

};

await copy();
