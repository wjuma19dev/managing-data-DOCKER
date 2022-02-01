require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exp = require('constants');

const app = express();
const port = process.env.PORT | 3000;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes'));

app.listen(
  port,
  console.log(`Server running on localhost:${port}`)
);