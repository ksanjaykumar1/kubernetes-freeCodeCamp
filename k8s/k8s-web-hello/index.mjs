// mjs it allows e6 module syntax, allows use of import instead of require

import express from 'express';
import os from 'os';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const helloMessage = ` Hello from the ${os.hostname}`;
  console.log(helloMessage);
  res.send(helloMessage);
});

app.listen(PORT, () => {
  console.log(`web service is listening at port: ${PORT}`);
});
