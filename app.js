const express = require('express');

const app = express();

app.use(express.json({
	limit: '100kb',
	strict: true,
	type: 'application/json',
}));

app.get('/hello', (req, res) => {
	return res.status(200).json({ message: 'hello world' });
});

app.get('/bye', (req, res) => {
	return res.status(200).json({ message: 'goodbye cruel world'});
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
		runServer(3001);
	} catch (error) {
		console.error(error);
	}
}

module.exports = {
	app,
	runServer,
	closeServer,
};
