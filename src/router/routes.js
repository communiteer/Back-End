const express = require('express');
const app = express();
const DB = require('../controllers');

app.get('/areas', DB.getAreas);
app.get('/skills', DB.getSkills);
app.get('/user/:id', DB.getUserById);
app.get('/group/:id',DB.getGroupById);
app.get('/groups/:area', DB.getGroupsByArea);
app.get('/events/:area', DB.getEventsByArea);

module.exports = app;