const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));