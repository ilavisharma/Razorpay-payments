const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.use(express.json());

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
  res.render('index', {
    key_id: process.env.KEY_ID
  });
});

app.post('/purchase', (req, res) => {
  console.log(req.body);
  res.send('Success');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
