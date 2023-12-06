// var cors = require('cors');
// const express = require('express')
// const bodyParser = require('body-parser');
//had to use import instead
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));

app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('<h1>HELLO WORLD!</h1>');
    console.log("Hello There!");
});

app.listen(port, () => {
    console.log(`Server port is ${port}`);
});