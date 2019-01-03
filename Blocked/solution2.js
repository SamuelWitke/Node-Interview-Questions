/*
 * If you need to do something more complex, partitioning is not a good option. 
 * This is because partitioning uses only the Event Loop, and you won't benefit from multiple cores almost certainly available on your machine. 
 * Remember, the Event Loop should orchestrate client requests, not fulfill them itself. 
 * For a complicated task, move the work off of the Event Loop onto a Worker Pool.
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => { 
	res.send('Hello, World\n') 
});

const asyncLongJob = (date,end,cb) => {
	if(date >= end) {
		cb();
		return;
	}
	date = Date.now()
	setImmediate(asyncLongJob.bind(null,date,end,cb))
}

app.get('/foo', (req, res) => {
	let date = Date.now()
	let end = Date.now() + 10000;

	asyncLongJob(date,end, () => {
		res.send('I am done!');
	});
});

app.get('/bar', (req, res) => {
	// Imagine that setTimeout is IO operation
	// setTimeout is a native implementation, not the JS
	setTimeout(() => res.send('I am done!'), 5001);
});

app.listen(3000, () => console.log('app listening on port 3000'));
