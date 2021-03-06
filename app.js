const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');

const rzp = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET
});

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
  const { razorpay_payment_id } = req.body;
  rzp.payments.capture(razorpay_payment_id, 50000);
  res.render('success');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
