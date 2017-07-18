const express = require('express');
const app = express();
const DB = require('../controllers');

app.get('/areas', DB.getAreas);
app.get('/skills', DB.getSkills);
app.get('/user/:id', DB.getUserById);
app.get('/group/:id',DB.getGroupById);

module.exports = app;