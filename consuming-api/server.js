const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json([
    { name: 'Jeff' },
    { name: 'Diego' },
    { name: 'Lucas' },
    { name: 'Mayk' },
  ]);
});

app.listen('4567');
