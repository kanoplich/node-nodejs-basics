import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const readStream = createReadStream(filePath);

  readStream.on('readable', () => {
    const data = readStream.read();
    if(data) {
      hash.update(data);
    } else {
      console.log(hash.digest('hex'));
    }
  });
};

await calculateHash();