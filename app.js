require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Start db connection
mongoose.connect(process.env.DBCONNECTOR, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', function (error) { console.error(error); });
db.once('open', function () { console.log('Connected to database'); });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;