
function foo() {
	if(this.constructor !== foo) console.log("error");
}
class baz {
	constructor() {
		if(this.constructor !== foo) console.log("error");
	}
}

const bar = new foo();
const b = foo();

const bax = new baz();
