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
app.get('/users/:user_id/groups', DB.getUserGroups);
app.get('/groups/:group_id/users', DB.getGroupUsers);
app.get('/users/:userID/events',DB.getUserEvents);
app.get('/events/:eventId/users', DB.getEventUsers);
app.get('/users/:userId/skills', DB.getUserSkills);
app.get('/events/:eventId/skills', DB.getEventSkills);

app.post('/users/:userId/group', DB.addGroup);
app.post('/event', DB.addEvent);
app.post('/user', DB.addUser);

app.delete('/user/:id', DB.delUser);
app.delete('/group/:id', DB.delGroup);
app.delete('/event/:id', DB.delEvent);

module.exports = app;