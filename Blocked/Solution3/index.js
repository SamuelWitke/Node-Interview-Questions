const express = require("express")
const app = express()
var m = require("./")

function doAsyncStuffPromised(workerId, throwsError = false) {
	return new Promise(function(resolve, reject) {
		const seconds = 5000

		m.doAsyncStuff(workerId, seconds, throwsError, function(error, result) {
			if (error) {
				return reject(error)
			}
			return resolve(result)
		})

	})
}


app.get("/", (req, res) => res.send("Hello, World"))

app.get("/foo", (req, res) => {
	doAsyncStuffPromised("1")
		.then((tId) => {
			console.log("task %s finished", tId)
			res.send("Done")
		})
})

app.get("/non-block", (req, res) => {
	// Imagine that setTimeout is IO operation
	// setTimeout is a native implementation, not the JS
	setTimeout(() => res.send("I am done!"), 5000)
})

app.listen(3000, () => console.log("app listening on port 3000"))
