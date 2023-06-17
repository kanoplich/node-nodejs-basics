const parseEnv = () => {
  const result = Object.entries(process.env).filter(([key, value]) => key.includes('RSS_')).map(([key, value]) => `${key}=${value}`).join('; ');
  console.log(result);
};

parseEnv();