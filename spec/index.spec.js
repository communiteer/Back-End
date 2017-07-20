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
	addGroup
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
					expect(res.body.groups).to.be.an('object');
					expect(res.body.groups.group_name).to.equal('goodName');
					done();
				});
		});
	});
});