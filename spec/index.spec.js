process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const path = require('path');
const {
	getUserById,
	getGroupById,
	getAreas,
	getSkills,
	getGroupsByArea,
	getEventsByArea,
	getEventsById,
	getUserGroups,
	getGroupUsers,
	getUserEvents,
	getEventUsers,
	getUserSkills,
	getEventSkills,
	addGroup,
	addEvent,
	addUser, 
	delUser,
	delGroup,
	delEvent,
	updateUser
} = require(path.resolve(__dirname, '..', 'src', 'controllers'));
const server = require('../server');

const request = require('supertest');

describe('TEST ALL THE ROUTES', () => {
	describe('Get Skills', () => {
		it('is a function', () => {
			expect(getSkills).to.be.a('function');
		});
		it('should return all the available areas', (done) => {
			request(server)
				.get('/areas')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					done();
				});
		});
	});
	describe('Get Skills', () => {
		it('is a function', () => {
			expect(getAreas).to.be.a('function');
		});
		it('should return all the available skills', (done) => {
			request(server)
				.get('/skills')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					done();
				});
		});
	});
	describe('GET-USER-BY-ID', () => {
		it('is a function', () => {
			expect(getUserById).to.be.a('function');
		});
		it('should return the user information using user id', (done) => {
			request(server)
				.get('/users/1')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].user_id).to.equal(1);
					done();
				});
		});
	});

	describe('GET-GROUP-BY-ID', () => {
		it('is a function', () => {
			expect(getGroupById).to.be.a('function');
		});
		it('should return the group information using group id', (done) => {
			request(server)
				.get('/groups/1')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].group_id).to.equal(1);
					expect(res.body.data[0].admin_fname).to.equal('Kamran');
					expect(res.body.data[0].group_name).to.equal('A');
					done();
				});
		});
	});

	describe('GET-GROUPS-BY-AREA', () => {
		it('is a function', () => {
			expect(getGroupsByArea).to.be.a('function');
		});
		it('should return all the groups for given area', (done) => {
			request(server)
				.get('/groups/area/1')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data.length).to.equal(2);
					done();
				});
		});
	});

	describe('GET-EVENTS-BY-AREA', () => {
		it('is a function', () => {
			expect(getEventsByArea).to.be.a('function');
		});
		it('should return all the events for given area', (done) => {
			request(server)
				.get('/events/area/1')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].area_name).to.equal('south Manchester');
					done();
				});
		});
	});

	describe('GET-EVENTS-BY-EVENT_ID', () => {
		it('is a function', () => {
			expect(getEventsById).to.be.a('function');
		});
		it('should return all the event information for agiven event id', (done) => {
			request(server)
				.get('/events/1')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].event_name).to.equal('It is not too old to learn computer');
					done();
				});
		});
	});

	describe('GET-ALL-GROUPS-INFO-FOR-ONE-USER', () => {
		it('is a function', () => {
			expect(getUserGroups).to.be.a('function');
		});
		it('should return all the group information for agiven user id', (done) => {
			request(server)
				.get('/users/1/groups')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].admin_fname).to.equal('Kamran');
					done();
				});
		});
	});

	describe('GET-ALL-USERS-INFO-FOR-ONE-GROUP', () => {
		it('is a function', () => {
			expect(getGroupUsers).to.be.a('function');
		});
		it('should return all the user information for agiven group id', (done) => {
			request(server)
				.get('/groups/1/users')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].user_fname).to.equal('Ben');
					done();
				});
		});
	});

	describe('GET-ALL-EVENTS-FOR-ONE-USER', () => {
		it('is a function', () => {
			expect(getUserEvents).to.be.a('function');
		});
		it('should return all events information for agiven user', (done) => {
			request(server)
				.get('/users/1/events')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].event_name).to.equal('It is not too old to learn computer');
					done();
				});
		});
	});
		describe('GET-ALL-USERS-FOR-ONE-EVENT', () => {
		it('is a function', () => {
			expect(getEventUsers).to.be.a('function');
		});
		it('should return all users for agiven event', (done) => {
			request(server)
				.get('/events/1/users')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].user_fname).to.equal('Ben');
					done();
				});
		});
	});

	describe('GET-ALL-SKILLS-FOR-ONE-USER', () => {
		it('is a function', () => {
			expect(getUserSkills).to.be.a('function');
		});
		it('should return all the skills for agiven user', (done) => {
			request(server)
				.get('/users/1/skills')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].user_fname).to.equal('Ben');
					done();
				});
		});
	});

	describe('GET-ALL-SKILLS-FOR-ONE-EVENT', () => {
		it('is a function', () => {
			expect(getEventSkills).to.be.a('function');
		});
		it('should return all the skills needed for agiven event', (done) => {
			request(server)
				.get('/events/1/skills')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.data).to.be.an('array');
					expect(res.body.data[0].skill_name).to.equal('Math Tutor');
					done();
				});
		});
	});

	describe('POST-NEW_GROUP', () => {
		it('is a function', () => {
			expect(addGroup).to.be.a('function');
		});
		it('should return a new group', (done) => {
			request(server)
				.post('/users/1/group')
				.send({
					"name":"goodName",
					"area":"1",
					"description":"its a good group",
					"details":"contact us on 145236789"
					})
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.group).to.be.an('object');
					expect(res.body.group.group_name).to.equal('goodName');
					done();
				});
		});
	});

	describe('POST-EVENT AND EVENT SKILLS', () => {
		it('is a function', () => {
			expect(addEvent).to.be.a('function');
		});
		it('should return a new event with skills', (done) => {
			request(server)
				.post('/event')
				.send({
						"name": "teens party",
						"area": "1",
						"date": "2017-5-8",
						"time": "15:00",
						"group": "1",
						"description": "this is a great night for teen-agers",
						"skills": ["1","2","4"]
					})
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.eventSkill).to.be.an('array');
					expect(res.body.eventSkill[0].event_id).to.equal(5);
					done();
				});
		});
	});

	describe('POST-USER AND USER SKILLS', () => {
		it('is a function', () => {
			expect(addUser).to.be.a('function');
		});
		it('should return a new event with skills', (done) => {
			request(server)
				.post('/user')
				.send({
					"fName": "Mauro",
					"lName": "Gostoso",
					"area": "1",
					"phone": "074856478",
					"email": "mauro@northcoders.com",
					"picture": "google@google.com",
					"skills": ["3","4","5"]
				})
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.userSkill).to.be.an('array');
					expect(res.body.userSkill[0].user_id).to.equal(5);
					done();
				});
		});
	});

	describe('DELETE-USER', () => {
		it('is a function', () => {
			expect(delUser).to.be.a('function');
		});
		it('should not delete admin user', (done) => {
			request(server)
				.del('/user/4')
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.message).to.equal('You are admin of Group(s) and You cant delete your account');
					done();
				});
		});
		it('should delete a user if not admin user', (done) => {
			request(server)
				.delete('/user/2')
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.message).to.equal('user been deleted');
					done();
				});
		});
	});

	describe('DELETE-GROUP', () => {
		it('is a function', () => {
			expect(delGroup).to.be.a('function');
		});
		it('should delete a group', (done) => {
			request(server)
				.delete('/group/1')
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.message).to.equal('group been deleted');
					done();
				});
		});
	});

	describe('DELETE-EVENT', () => {
		it('is a function', () => {
			expect(delEvent).to.be.a('function');
		});
		it('should delete a Event', (done) => {
			request(server)
				.delete('/event/1')
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.message).to.equal('event been deleted');
					done();
				});
		});
	});

	describe('UPDATE USER', () => {
		it('is a function', () => {
			expect(delEvent).to.be.a('function');
		});
		it('should update a user info', (done) => {
			request(server)
				.put('/users/1')
				.send({
					"colName":"Phone",
					"colValue":"333333333"
				})
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.user.phone).to.equal('333333333');
					done();
				});
		});
	});
});