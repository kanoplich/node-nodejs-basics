import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const filePath = join(__dirname, 'worker.js');
  const cpu = cpus();

  const promises = await Promise.allSettled(cpu.map((item, i) => {
    return new Promise((res, rej) => {
      const worker = new Worker(filePath, { workerData: i + 10 });
      worker.on('message', (res));
      worker.on('error', rej);
    });
  }));

  const result = promises.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error', data: status === 'fulfilled' ? value : null
  }));
  console.log(result);
};

await performCalculations();