var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res) {
	res.send("Success");
});


app.get('/search' , function(req, res) {
	var s =  req.query.s;
	var id = req.query.id;
	if (s !== undefined) {
		request('http://www.omdbapi.com/?s=' + s + '', function(error, response, body) {
			if (!error && response.statusCode == 200) {
	    		console.log(body);
	    		res.send(body);
	 		}
		});
	}
	else {
		request('http://www.omdbapi.com/?i=' + id + '', function(error, response, body) {
			if (!error && response.statusCode == 200) {
	    		console.log(body);
	    		res.send(body);
	 		}
		});
	}
});



app.listen(3000, function() {
	console.log('listening on 3000');
});
