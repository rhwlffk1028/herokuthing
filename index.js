const express = require('express');

const PORT = 3001;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});