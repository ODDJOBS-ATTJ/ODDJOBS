const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const accountRoutes = require('../server/routes/oddjobs.route.js');
const workerRoutes = require('../server/routes/workers.route.js');

const app = express();
app.use(cors());

// Use express session
app.use(
  session({
    secret: 'mugi-nice',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      sameSite: 'strict',  // Corrected to 'strict'
      expires: 60000,
    },
  })
);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/accounts', accountRoutes);
app.use('/workers', workerRoutes);

app.listen(port, () => {
  console.log(`Server port is ${port}`);
});
