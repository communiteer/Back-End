const express = require('express');
const app = express();
const DB = require('../controllers');

app.get('/users/:id', DB.getUserById);
app.get('/groups/:id',DB.getGroupById);

module.exports = app;