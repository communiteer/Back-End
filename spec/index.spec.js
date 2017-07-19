process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const path = require('path');
const {getUserById, getGroupById, getAreas, getSkills, getGroupsByArea, getEventsByArea,getEventsById} = require(path.resolve(__dirname,'..','src','controllers'));
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
			.end((err,res) => {
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
			.end((err,res) => {
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
			.end((err,res) => {
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
			.end((err,res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.an('object');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0].group_id).to.equal(1);
				expect(res.body.data[0].admin_name).to.equal('Ben');
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
			.end((err,res) => {
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
			.end((err,res) => {
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
			expect(getEventsByArea).to.be.a('function');
		});
		it('should return all the event information for agiven event id', (done) => {
			request(server)
			.get('/events/1')
			.end((err,res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.an('object');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0].event_name).to.equal('It is not too old to learn computer');
				done();
			});
		});
	});
});