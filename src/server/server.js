const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const accountRoutes = require('../server/routes/oddjobs.route.js');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));

app.use(bodyParser.json());

app.use('/', accountRoutes)

// app.get('/', (req, res) => {
//     res.send('<h1>HELLO MYTHER</h1>');
//     console.log("Hello There!");
// });

app.listen(port, () => {
    console.log(`Server port is ${port}`);
});