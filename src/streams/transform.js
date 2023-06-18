import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const chunkString = chunk.toString().trim();
      const chunkReverse = chunkString.split('').reverse().join('');
      this.push(chunkReverse + '\n');
      callback();
    },
  });

  await pipeline(process.stdin, reverse, process.stdout);
};

await transform();