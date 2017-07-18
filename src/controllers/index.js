
const path = require('path');
const db = require(path.resolve(__dirname, '../..','db'));

exports.getUserById = (req, res, next) => {
	const id = req.params.id;
    db.any('SELECT user_id, user_name, area_name, Phone, Email, ProfilePicture  FROM Users, Areas WHERE Users.area = Areas.area_id AND Users.user_id = $1', id)
        .then((data) => {
            res.status(200).json({ data });
        })
        .catch((err) => {
            return next(err);
        });
};