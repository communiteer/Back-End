
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
	db.any('SELECT user_id, user_fName, user_lName, Areas.area_name, Phone, Email, ProfilePicture FROM Users JOIN Areas ON Users.area = Areas.area_id WHERE Users.user_id = $1', id)
		.then((data) => {
			res.status(200).json({ data });
		})
		.catch((err) => {
			return next(err);
		});
};
exports.getGroupById = (req,res,next) => {
	const ID = req.params.id;
	db.any('SELECT group_id, group_name, league,Users.user_fName as admin_fname, Users.user_lName as admin_lname FROM Groups JOIN Users ON Groups.admin_id = Users.user_id WHERE Groups.group_id = $1', ID)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};

exports.getGroupsByArea = (req,res,next) => {
	const ID = req.params.area;
	db.any('SELECT group_id, group_name, league, Users.user_fName as admin_fname,Users.user_lName as admin_lname, Areas.area_name FROM Groups JOIN Users ON Groups.admin_id = Users.user_id JOIN Areas ON Groups.area_id=Areas.area_id WHERE Groups.area_id = $1', ID)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};

exports.getEventsByArea = (req,res,next) => {
	const area_id = req.params.area;
	db.any('SELECT event_id, event_name, event_date, event_time, event_description,Areas.area_name, Groups.group_name FROM Events JOIN Areas ON Events.area_id=Areas.area_id JOIN Groups ON Events.group_id=Groups.group_id WHERE Events.area_id = $1', area_id)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};
exports.getEventsById = (req,res,next) => {
	const ID = req.params.id;
	db.any('SELECT event_id, event_name, event_date, event_time, event_description,Areas.area_name, Groups.group_name FROM Events JOIN Areas ON Events.area_id=Areas.area_id JOIN Groups ON Events.group_id=Groups.group_id WHERE Events.event_id = $1',ID)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};
exports.getUserGroups = (req,res,next) => {
	const userID = req.params.user_id;
	db.any('SELECT Users.user_fName, Users.user_lName, Groups.group_name FROM GroupUser JOIN Users ON Users.user_id = GroupUser.user_id JOIN Groups ON Groups.group_id = GroupUser.group_id WHERE GroupUser.user_id = $1', userID)
	.then((data) => {
		res.status(200).json({data});
	})
	.catch(err => {
		return next(err);
	});
};