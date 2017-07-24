const express = require('express');
const app = express();
const DB = require('../controllers');

app.get('/areas', DB.getAreas);
app.get('/skills', DB.getSkills);
app.get('/users/:id', DB.getUserById);
app.get('/groups/:id',DB.getGroupById);
app.get('/areas/:id/groups', DB.getGroupsByArea);
app.get('/areas/:id/events', DB.getEventsByArea);
app.get('/events/:id',DB.getEventsById);
app.get('/users/:id/groups', DB.getUserGroups);
app.get('/groups/:id/users', DB.getGroupUsers);
app.get('/users/:id/events',DB.getUserEvents);
app.get('/events/:id/users', DB.getEventUsers);
app.get('/users/:id/skills', DB.getUserSkills);
app.get('/events/:id/skills', DB.getEventSkills);

app.post('/users/:id/group', DB.addGroup);
app.post('/event', DB.addEvent);
app.post('/user', DB.addUser);

app.delete('/user/:id', DB.delUser);
app.delete('/group/:id', DB.delGroup);
app.delete('/event/:id', DB.delEvent);

app.put('/users/:id',DB.updateUser);

module.exports = app;