const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');


function getTaco (type) { 
	return new Promise(resolve =>
		fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
		.then( res => res.json())
		.then( body => resolve(body))
	)
}


// regular operation
function makeMilkshake (type) {
	return new Promise(resolve => setTimeout(() => resolve(type), 0));
}

// order function which returns promise
function order (type) {
	return new Promise( async function(resolve, reject) {
		//await timeout(3000);
		const taco = await getTaco(type)
		if (!taco) {
			return reject(Error('Error while cooking'))
		}
		return resolve(taco.name)
	})
}


app.get('/', (req, res) => {
	
	order('JakeBurger')
		.then( async (taco) => {
			const milkshake = await makeMilkshake('vanilla')
			return { taco, shake: milkshake }
		})
		.then( foodItems => {
			console.log('BURGER PARTY !', foodItems)
			res.json(foodItems);
		})
		.catch( err => {
			console.log(err)
			res.json(err);
		})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
