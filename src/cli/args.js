import { argv } from 'process';

const parseArgs = () => {
  const array = [];

  for(let i = 0; i < argv.length; i++) {
    if(argv[i].includes('--')) {
      const elem = argv[i].slice(2);
      array.push(`${elem} is ${argv[i + 1]}`);
    }
  }
  console.log(array.join(', '));
};

parseArgs();