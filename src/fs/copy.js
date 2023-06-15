import { dirname, join } from 'path';
import { copyFile, readdir, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const filePathFiles = join(__dirname, 'files');
  const filePathFiles_copy = join(__dirname, 'files_copy');

  try {
    await mkdir(filePathFiles_copy);
    const files = await readdir(filePathFiles);

    for(const file of files) {
      const pathFrom = join(filePathFiles, file);
      const pathTo = join(filePathFiles_copy, file);

      await copyFile(pathFrom, pathTo);
    }
  } catch {
    throw new Error('FS operation failed');
  }

};

await copy();
