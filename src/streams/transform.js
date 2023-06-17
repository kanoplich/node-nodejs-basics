import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    const chunkString = chunk.toString().trim();
    const chunkReverse = chunkString.split('').reverse().join('');
    this.push(chunkReverse + '\n');
    callback();
  },
});

const transform = async () => {
  await pipeline(process.stdin, reverse, process.stdout);
};

await transform();