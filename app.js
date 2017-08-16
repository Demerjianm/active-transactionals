const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notes = require('./routes/notes');
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/what-happens';
mongoose.connect(mongoUri)

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api/notes', notes);

app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

module.exports = app;
