const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
	res.status(200).send('hello world');
});

app.listen(3001, () => {
	console.log('server listening on port 3001');
});
