import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const fileArchive = join(__dirname, 'files', 'archive.gz');

  const source = createReadStream(filePath);
  const gzip = createGzip();
  const destination = createWriteStream(fileArchive);

  await pipeline(source, gzip, destination);
}; 

await compress();