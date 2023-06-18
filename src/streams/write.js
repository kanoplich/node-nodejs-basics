import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');

  const writeStream = createWriteStream(filePath);
  process.stdin.on('data', (data) => {
    writeStream.write(data);
  });
};

await write();