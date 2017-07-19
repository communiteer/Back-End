const express = require('express');
const app = express();
const DB = require('../controllers');

app.get('/areas', DB.getAreas);
app.get('/skills', DB.getSkills);
app.get('/users/:id', DB.getUserById);
app.get('/groups/:id',DB.getGroupById);
app.get('/groups/area/:area', DB.getGroupsByArea);
app.get('/events/area/:area', DB.getEventsByArea);
app.get('/events/:id',DB.getEventsById);

module.exports = app;