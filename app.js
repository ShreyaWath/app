const express = require('express');
const app = express();
const port = 3000;
app.get('/welcome', (req, res) => {
  res.send('Welcome to the automated pipeline!');
});


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
