const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const accountRoutes = require('../server/routes/oddjobs.route.js');

const app = express();
app.use(cors());

// Use express session
app.use(express.json());
app.use(session({
  secret: 'mugi', // Replace with a strong secret key
  cookie: { 
    sameSite:'strict',
  },
}));

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/accounts', accountRoutes);

app.listen(port, () => {
  console.log(`Server port is ${port}`);
});
