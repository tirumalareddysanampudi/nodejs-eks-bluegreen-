const express = require('express');
const app = express();

const VERSION = process.env.VERSION || "BLUE";

app.get('/', (req, res) => {
  res.send(`Hello from Node.js App - Version: ${VERSION}`);
});

app.listen(3000, () => {
  console.log(`Server running on port 3000 - ${VERSION}`);
});
