const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const accountRoutes     = require('../server/routes/oddjobs.route.js');
const workerRoutes      = require('../server/routes/workers.route.js');
const serviceRoutes     = require('../server/routes/service.route.js');
const bookingRoutes     = require('../server/routes/bookings.route.js');
const adminlogRoutes    = require('../server/routes/adminlog.route.js');
const actionRoutes      = require('../server/routes/action.route.js');
const applicationRoutes = require('../server/routes/application.route.js');
const appliedjobsRoutes = require('../server/routes/appliedjobs.route.js');
const orderRoutes       = require('../server/routes/order.route.js');
const billingRoutes     = require('../server/routes/billing.route.js');
const ratingsRoute      = require('../server/routes/ratings.route.js');
const reportsRoute      = require('../server/routes/report.route.js');
const statusRoute       = require('../server/routes/status.route.js');
const fileUploadRoute   = require('../server/routes/fileUpload.route.js');


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

app.use('/accounts',    accountRoutes);
app.use('/workers',     workerRoutes);
app.use('/service',     serviceRoutes);
app.use('/bookings',    bookingRoutes);
app.use('/adminlog',    adminlogRoutes);
app.use('/action',      actionRoutes);
app.use('/application', applicationRoutes);
app.use('/applied',     appliedjobsRoutes);
app.use('/order',       orderRoutes);
app.use('/billing',     billingRoutes);
app.use('ratings',      ratingsRoute);
app.use('/reports',     reportsRoute);
app.use('/status',      statusRoute);
app.use('/file',        fileUploadRoute);
app.use('/uploads', express.static('../../General/IMAGE/uploads'));

app.listen(port, () => {
  console.log(`Server port is ${port}`);
});
