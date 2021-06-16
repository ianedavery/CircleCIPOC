const chai = require('chai');
const chaiHTTP = require('chai-http');
const should = chai.should();

chai.use(chaiHTTP);

const {
	app,
	runServer,
	closeServer,
} = require('../app');

describe('circle ci poc', () => {
	before(() => {
		return runServer(3000);
	});
	after(() => {
		return closeServer();
	});
	describe('GET endpoint', () => {
		it('should return a string', () => {
			let res;
			return chai.request(app)
				.get('/hello')
				.then(_res => {
					res = _res;
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('message').eql('hello world');
				});
		});
	});
});
