const path = require('path');
const db = require(path.resolve(__dirname, '../..', 'db'));

exports.getAreas = (req, res, next) => {
	db.any('SELECT * FROM areas')
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.getSkills = (req, res, next) => {
	db.any('SELECT * FROM skills')
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.getUserById = (req, res, next) => {
	const id = req.params.id;
	db.any('SELECT user_id, user_fName, user_lName, Areas.area_name, Phone, Email, ProfilePicture FROM Users JOIN Areas ON Users.area = Areas.area_id WHERE Users.user_id = $1', id)
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch((err) => {
			return next(err);
		});
};
exports.getGroupById = (req, res, next) => {
	const ID = req.params.id;
	db.any('SELECT group_id, group_name, league,Users.user_fName as admin_fname, Users.user_lName as admin_lname FROM Groups JOIN Users ON Groups.admin_id = Users.user_id WHERE Groups.group_id = $1', ID)
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getGroupsByArea = (req, res, next) => {
	const ID = req.params.area;
	db.any('SELECT group_id, group_name, league, Users.user_fName as admin_fname,Users.user_lName as admin_lname, Areas.area_name FROM Groups JOIN Users ON Groups.admin_id = Users.user_id JOIN Areas ON Groups.area_id=Areas.area_id WHERE Groups.area_id = $1', ID)
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getEventsByArea = (req, res, next) => {
	const area_id = req.params.area;
	db.any('SELECT event_id, event_name, event_date, event_time, event_description,Areas.area_name, Groups.group_name FROM Events JOIN Areas ON Events.area_id=Areas.area_id JOIN Groups ON Events.group_id=Groups.group_id WHERE Events.area_id = $1', area_id)
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};
exports.getEventsById = (req, res, next) => {
	const ID = req.params.id;
	db.any('SELECT event_id, event_name, event_date, event_time, event_description,Areas.area_name, Groups.group_name FROM Events JOIN Areas ON Events.area_id=Areas.area_id JOIN Groups ON Events.group_id=Groups.group_id WHERE Events.event_id = $1', ID)
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};
exports.getUserGroups = (req, res, next) => {
	const userID = req.params.user_id;
	db.any('SELECT Groups.group_id, Groups.group_name, Areas.area_name, Users.user_fName as admin_fname, Users.user_lName as admin_lname, Groups.league FROM GroupUser JOIN Groups ON GroupUser.group_id = Groups.group_id JOIN Areas ON Groups.area_id = Areas.area_id JOIN Users ON Groups.admin_id = Users.user_id WHERE GroupUser.user_id = $1', userID)
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getGroupUsers = (req, res, next) => {
	const groupID = req.params.group_id;

	db.any('SELECT Users.user_id, Users.user_fName, Users.user_lName, Users.Phone, Users.Email, Users.ProfilePicture,Areas.area_name FROM GroupUser JOIN Users ON Users.user_id = GroupUser.user_id JOIN Areas ON Users.area = Areas.area_id WHERE GroupUser.group_id = $1', groupID)
		.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getUserEvents = (req,res,next) => {
	const userID = req.params.userID;
	db.any('SELECT Events.event_id, Events.event_name, Areas.area_name, Events.event_date, Events.event_time, Events.event_description FROM UserEvents JOIN Events ON UserEvents.event_id=Events.event_id JOIN Areas ON Events.area_id=Areas.area_id WHERE user_id =$1',userID)
	.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getEventUsers = (req,res,next) => {
	const eventId = req.params.eventId;
	db.any('SELECT Users.user_fName, Users.user_lName, Users.user_id FROM UserEvents JOIN Users ON UserEvents.user_id = Users.user_id Where UserEvents.event_id=$1',eventId)
	.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getUserSkills = (req,res,next) => {
	const userId = req.params.userId;
	db.any('SELECT Users.user_fName, Users.user_lName, Skills.skill_name  FROM UserSkill JOIN Users ON UserSkill.user_id = Users.user_id JOIN Skills ON UserSkill.skill_id=Skills.skill_id Where UserSkill.user_id=$1',userId)
	.then((data) => {
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};
