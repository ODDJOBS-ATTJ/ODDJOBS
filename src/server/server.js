const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const accountRoutes = require('../server/routes/oddjobs.route.js');
const session = require('express-session');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/accounts', accountRoutes); // Use '/accounts' as the base route

app.use(session({
  secret: 'secret-odd',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Note: 'true' if https
}));

app.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
      // User is not logged in
      return res.status(401).send('You must be logged in to access this page');
    }
  
    // User is logged in
    // ... rest of the route logic ...
  });

app.listen(port, () => {
    console.log(`Server port is ${port}`);
});