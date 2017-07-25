const path = require('path');
const db = require(path.resolve(__dirname, '../..', 'db'));
const bluebird = require ('bluebird');
const pgp = require('pg-promise')({promiseLib: bluebird});

exports.getAreas = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	db.any('SELECT * FROM areas')
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.getAllUsers = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	db.any('SELECT * FROM Users')
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.getSkills = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	db.any('SELECT * FROM skills')
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.getUserById = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const id = req.params.id;
	db.any('SELECT user_id, user_fName, user_lName, Users.area, Areas.area_name, Phone, Email, ProfilePicture FROM Users JOIN Areas ON Users.area = Areas.area_id WHERE Users.user_id = $1', id)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch((err) => {
			return next(err);
		});
};
exports.getGroupById = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.any('SELECT group_id, group_name, description, contact_details, Users.user_fName as admin_fname, Users.user_lName as admin_lname FROM Groups JOIN Users ON Groups.admin_id = Users.user_id WHERE Groups.group_id = $1', ID)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getGroupEvents =  (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.any('SELECT event_id, event_name, area_id, event_time, event_date, event_description FROM Events WHERE group_id= $1', ID)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getGroupsByArea = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.any('SELECT group_id, group_name, description, contact_details, Users.user_fName as admin_fname,Users.user_lName as admin_lname, Areas.area_name FROM Groups JOIN Users ON Groups.admin_id = Users.user_id JOIN Areas ON Groups.area_id=Areas.area_id WHERE Groups.area_id = $1', ID)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getEventsByArea = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const area_id = req.params.id;
	db.any('SELECT event_id, event_name, event_date, event_time, event_description,Areas.area_name, Groups.group_name FROM Events JOIN Areas ON Events.area_id=Areas.area_id JOIN Groups ON Events.group_id=Groups.group_id WHERE Events.area_id = $1', area_id)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};
exports.getEventsById = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.any('SELECT event_id, event_name, event_date, event_time, event_description,Areas.area_name, Groups.group_name FROM Events JOIN Areas ON Events.area_id=Areas.area_id JOIN Groups ON Events.group_id=Groups.group_id WHERE Events.event_id = $1', ID)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};
exports.getUserGroups = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const userID = req.params.id;
	db.any('SELECT GroupUser.userPoints, Groups.group_id, Groups.group_name, Areas.area_name, Users.user_fName as admin_fname, Users.user_lName as admin_lname FROM GroupUser JOIN Groups ON GroupUser.group_id = Groups.group_id JOIN Areas ON Groups.area_id = Areas.area_id JOIN Users ON Groups.admin_id = Users.user_id WHERE GroupUser.user_id = $1 ORDER BY GroupUser.userPoints DESC', userID)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getGroupUsers = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const groupID = req.params.id;

	db.any('SELECT Users.user_id, Users.user_fName, Users.user_lName, Users.Phone, Users.Email, Users.ProfilePicture,Areas.area_name FROM GroupUser JOIN Users ON Users.user_id = GroupUser.user_id JOIN Areas ON Users.area = Areas.area_id WHERE GroupUser.group_id = $1', groupID)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getUserEvents = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const userID = req.params.id;
	db.any('SELECT Events.event_id, Events.event_name, Areas.area_name, Events.event_date, Events.event_time, Events.event_description, Groups.group_name FROM UserEvents JOIN Events ON UserEvents.event_id=Events.event_id JOIN Areas ON Events.area_id=Areas.area_id JOIN Groups ON Groups.group_id = Events.group_id WHERE user_id =$1', userID)
		.then((data) => {
			res.status(200).json({data});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getEventUsers = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const eventId = req.params.id;
	db.any('SELECT Users.user_fName, Users.user_lName, Users.user_id FROM UserEvents JOIN Users ON UserEvents.user_id = Users.user_id Where UserEvents.event_id=$1', eventId)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getUserSkills = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const userId = req.params.id;
	db.any('SELECT Users.user_fName, Users.user_lName, Skills.skill_name  FROM UserSkill JOIN Users ON UserSkill.user_id = Users.user_id JOIN Skills ON UserSkill.skill_id=Skills.skill_id Where UserSkill.user_id=$1', userId)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getEventSkills = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const eventId = req.params.id;
	db.any('SELECT Skills.skill_name FROM EventSkill JOIN Skills ON EventSkill.skill_id=Skills.skill_id Where EventSkill.event_id=$1', eventId)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getSkillUsers = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const areaId = req.params.area_id;
	const skillId = req.params.skill_id;
	db.any('SELECT Users.user_id, Users.user_fName, Users.user_lName, Users.Phone, Users.Email, Users.ProfilePicture FROM UserSkill JOIN Users ON UserSkill.user_id = Users.user_id WHERE UserSkill.skill_id = $2 AND Users.area = $1',
	[areaId, skillId])
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.getGroupsByAdmin = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.any('SELECT * FROM Groups WHERE Groups.admin_id = $1',ID)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({
				data
			});
		})
		.catch(err => {
			return next(err);
		});
};

exports.addGroup = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const userId = req.params.id;
	const {
		name,
		area,
		description,
		details
	} = req.body;
	db.one('INSERT INTO Groups (group_name,area_id,admin_id,description, contact_details)' +
			'VALUES ($1, $2, $3, $4,$5) returning *', [
				name,
				Number(area),
				userId,
				description,
				details
			])
		.then((group) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(201)
				.json({
					group
				});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.addEvent = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const {
		name,
		area,
		date,
		time,
		group,
		description,
		skills
	} = req.body;
	db.one('INSERT INTO Events (event_name, area_id, event_date, event_time, group_id, event_description)' +
			'VALUES ($1, $2, $3, $4, $5, $6) returning *', [
				name,
				Number(area),
				date,
				time,
				group,
				description
			])
		.then((event) => {
			db.task(t => {
					const queries = skills.map((skill) => {
						return t.one('INSERT INTO EventSkill (skill_id, event_id) VALUES ($1, $2) returning *', [
							skill,
							event.event_id
						]);
					});
					return t.batch(queries);
				})

				.then((eventSkill) => {
					res.setHeader('Content-Type', 'application/json');
					res.status(201)
						.json({
							eventSkill
						});
				})
				.catch((err) => {
					return next(err);
				});
		});
};

exports.addUser = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const {
		id,
		fName,
		lName,
		area,
		phone,
		email,
		picture,
		skills
	} = req.body;
	db.one('INSERT INTO Users (user_id, user_fName, user_lName, area, Phone, Email, ProfilePicture)' +
			'VALUES ($1, $2, $3, $4, $5, $6,$7) returning *', [
				Number(id),
				fName,
				lName,
				Number(area),
				phone,
				email,
				picture
			])
		.then((user) => {
			console.log(user)
			db.task(t => {
					const queries = skills.map((skill) => {
						return t.one('INSERT INTO  UserSkill (user_id, skill_id) VALUES ($1, $2) returning *', [
							user.user_id,
							skill
						]);
					});
					return t.batch(queries);
				})

				.then((userSkill) => {
					res.setHeader('Content-Type', 'application/json');
					res.status(201)
						.json({
							userSkill
						});
				})
				.catch((err) => {
					return next(err);
				});
		});
};

exports.addUserToGroup = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const userID = req.params.user_id;
	const groupID = req.params.group_id;
	db.one('INSERT INTO GroupUser (user_id, group_id)' +
			'VALUES ($1, $2) returning *', [
				userID,
				groupID
			])
			.then((data) => {
					res.setHeader('Content-Type', 'application/json');
					res.status(201)
						.json({data});
				})
				.catch((err) => {
					return next(err);
				});
		};

exports.addUserToEvent = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const userID = req.params.user_id;
	const eventID = req.params.event_id;
	db.one('INSERT INTO UserEvents (user_id, event_id)' +
		'VALUES ($1, $2) returning *', [
			userID,
			eventID
		])
		.then((data) => {
				res.setHeader('Content-Type', 'application/json');
				res.status(201)
					.json({data});
			})
			.catch((err) => {
				return next(err);
			});
};

exports.delUser = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.any('SELECT * FROM Groups WHERE admin_id = $1', ID)
		.then((groups) => {
			if (groups.length > 0) {
				res.status(201)
					.json({
						message: 'You are admin of Group(s) and You cant delete your account'
					});
			} else {
				db.none('DELETE FROM Users WHERE user_id = $1', ID)
					.then(() => {
						res.setHeader('Content-Type', 'application/json');
						res.status(201)
							.json({
								message: 'user been deleted'
							});
					});
			}

		})
		.catch((err) => {
			return next(err);
		});
};

exports.delGroup = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.none('DELETE FROM Groups WHERE group_id = $1', ID)
		.then(() => {
			res.setHeader('Content-Type', 'application/json');
			res.status(201)
				.json({
					message: 'group been deleted'
				});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.delEvent = (req, res, next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	db.none('DELETE FROM Events WHERE event_id = $1', ID)
		.then(() => {
			res.setHeader('Content-Type', 'application/json');
			res.status(201)
				.json({
					message: 'event been deleted'
				});
		})
		.catch((err) => {
			return next(err);
		});
};

exports.updateUser = (req,res,next) => {
	pgp.pg.defaults.ssl = true;
	const ID = req.params.id;
	const {colName,colValue} = req.body;
	db.one('UPDATE Users SET $1^ = $2 WHERE user_id = $3 returning *',[colName, colValue, ID])
	.then((user) => {
		res.setHeader('Content-Type', 'application/json');
			res.status(201)
				.json({user});
	})
	.catch(err => {
		return next(err);
	});
};
