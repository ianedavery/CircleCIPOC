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
		return runServer();
	});
	after(() => {
		return closeServer();
	});
	describe('GET endpoint', () => {
		it('should return a string', (done) => {
			chai.request(app)
				.get('/hello')
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});
});
