
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

exports.getSkills = (req, res, next) => {
	db.any('SELECT * FROM skills')
		.then((data) => {
			res.status(200).json({ data });
		})
		.catch((err) => {
			return next(err);
		});
};

exports.getUserById = (req, res, next) => {
	const id = req.params.id;
	db.any('SELECT user_id, user_name, Areas.area_name, Phone, Email, ProfilePicture FROM Users JOIN Areas ON Users.area = Areas.area_id WHERE Users.user_id = $1', id)
		.then((data) => {
			res.status(200).json({ data });
		})
		.catch((err) => {
			return next(err);
		});
};
exports.getGroupById = (req,res,next) => {
	const ID = req.params.id;
	db.any('SELECT group_id, group_name, league,Users.user_name as admin_name FROM Groups JOIN Users ON Groups.admin_id = Users.user_id WHERE Groups.group_id = $1', ID)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};

exports.getGroupsByArea = (req,res,next) => {
	const area_id = req.params.area;
	db.any('SELECT * FROM Groups WHERE area_id = $1', area_id)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};

exports.getEventsByArea = (req,res,next) => {
	const area_id = req.params.area;
	db.any('SELECT * FROM Events WHERE area_id = $1', area_id)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};