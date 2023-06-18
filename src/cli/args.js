import { argv } from 'process';

const parseArgs = () => {
  const array = [];

  for(let i = 0; i < argv.length; i++) {
    const value = argv[i + 1];
    if(value && argv[i].includes('--')) {
      const elem = argv[i].slice(2);
      array.push(`${elem} is ${value}`);
    }
  }
  console.log(array.join(', '));
};

parseArgs();