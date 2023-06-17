import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const fileArchive = join(__dirname, 'files', 'archive.gz');

  const source = createReadStream(fileArchive);
  const unzip = createUnzip();
  const destination = createWriteStream(filePath);

  await pipeline(source, unzip, destination);
};

await decompress();