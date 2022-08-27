const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const url = require('url');
const path = require('path');
const epxressLayouts = require('express-ejs-layouts');
const pageRouter = require('./routes/pagerouter');

// dotenv config
dotenv.config();

// port init

const port = process.env.PORT || 4000;

// init app

const app = express();

// use of app

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use of ejs
app.set('view engine', 'ejs');
// use of layouts
app.use(epxressLayouts);
app.set('layout', 'layouts/app');

app.use(express.static('public'));
app.use(pageRouter);

// create server
app.listen(port, () => {
  console.log(`server is running on port ${port}`.bgMagenta);
});
