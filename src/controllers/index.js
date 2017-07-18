
const path = require('path');
const db = require(path.resolve(__dirname, '../..','db'));

exports.AllUsers = (req, res, next) => {
    db.any('SELECT * FROM Users')
        .then((data) => {
            res.status(200).json({ data });
        })
        .catch((err) => {
            return next(err);
        });
};