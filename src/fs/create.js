import { access, writeFile } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');

  access(filePath, (err) => {
    if(err) {
      writeFile(filePath, 'I am fresh and young', (error) => {
        if(error) throw error;
      });
    } else {
      throw new Error('FS operation failed');
    }
  })
};

await create();