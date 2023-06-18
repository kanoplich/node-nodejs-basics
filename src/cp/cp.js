import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const pathFile = join(__dirname, 'files', 'script.js');
  fork(pathFile, args);
};

await spawnChildProcess([1, 2, 3]);
