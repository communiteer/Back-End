
const path = require('path');
const db = require(path.resolve(__dirname, '../..', 'db'));

exports.getAreas = (req, res, next) => {
	db.any('SELECT * FROM areas')
		.then((data) => {
			res.status(200).json({ data });
		})
		.catch((err) => {
			return next(err);
		});
};
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
exports.getGroupById = (req,res,next) => {
	const ID = req.params.id;
	db.any('SELECT group_id, group_name, league,user_name as admin_name FROM Groups,Users WHERE Groups.admin_id = Users.user_id AND group_id = $1', ID)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};