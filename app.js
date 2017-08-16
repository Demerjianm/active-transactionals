const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notes = require('./routes/notes');
mongoose.connect('mongodb://localhost/what-happens');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

//API Routes, directly for react codes
//react will make fetch calls to API
//GET /api/notes, index route
//POST /api/notes, create route
//PUT /api/notes, update route
//DELETE /api/notes, delete route
//same url, but different routes

app.use('/api/notes', notes);

app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

module.exports = app;
