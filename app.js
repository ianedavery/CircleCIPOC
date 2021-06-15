const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
	res.status(200).send('hello world');
});

const runServer = async (portNumber) => {
	try {
		server = app.listen(portNumber, () => {
			console.log(`Server listening on port ${portNumber}`);
		});
	} catch (error) {
		console.error(error);
	}
};

const closeServer = () => {
	try {
		server.close();
	} catch (error) {
		console.error(error);
	}
};

if (require.main === module) {
	try {
		runServer(3000);
	} catch (error) {
		console.error(error);
	}
}

module.exports = {
	app,
	runServer,
	closeServer,
};
