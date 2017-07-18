const express = require('express');
const app = express();
const DB = require('../controllers');

app.get('/AllUsers', DB.AllUsers);
// app.get('/Allgroups',DB.AllGroups);

module.exports = app;