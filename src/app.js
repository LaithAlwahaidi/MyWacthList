const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get('/', (req, res) => {
	res.send('Success');
});


app.get('/search', (req, res) => {
	const s = req.query.s;
	const id = req.query.id;
	if (s !== undefined) {
		request(`http://www.omdbapi.com/?s=${s}`, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				console.log(body);
				res.send(body);
			}
		});
	}	else {
		request(`http://www.omdbapi.com/?i=${id}`, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				console.log(body);
				res.send(body);
			}
		});
	}
});


app.listen(3000, () => {
	console.log('listening on 3000');
});
