
const path = require('path');
const app = require('express')();
const DB = require('./db');
const config = require('./config');
const PORT = config.port;
const router = require(path.resolve(__dirname, 'src', 'router', 'routes'));

// app.use(router);
app.get('/users', () => {
	console.log('hello!');
});

app.listen(PORT, () => {
	console.log(`listening at ${PORT}`);
});

module.exports = app;