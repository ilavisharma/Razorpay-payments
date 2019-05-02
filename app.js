const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
