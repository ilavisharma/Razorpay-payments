const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
