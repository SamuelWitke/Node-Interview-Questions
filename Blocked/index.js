const express = require('express');
const app = express();

app.get('/', (req, res) => { 
	res.send('Hello, World\n') 
});



app.get('/foo', (req, res) => {
	let date = Date.now()
	let end = Date.now() + 10000;

	function help(i,cb) {
		if( date >= end) {
			cb();
			return;
		}
		date = Date.now()
		setImmediate(help.bind(null,date,cb))
	}

	help(date, () => {
		res.send('I am done!');
	});
});

app.get('/bar', (req, res) => {
	// Imagine that setTimeout is IO operation
	// setTimeout is a native implementation, not the JS
	setTimeout(() => res.send('I am done!'), 5001);
	console.log(3,Date.now());
});

app.listen(3000, () => console.log('app listening on port 3000'));
