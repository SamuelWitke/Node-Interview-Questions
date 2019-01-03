const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('a',1);
console.log(map1.equals(map2),map1===map2);

const profile = {
	name: 'techsith',
	getName: function() {
		console.log("here",this.name);
	},
}

profile.getName();;
