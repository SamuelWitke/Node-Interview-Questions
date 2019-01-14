const arr = [];
const obj = {};
function arrPush(ar) {
	const a = ar;
	a.push(1);
	a.push(2);
	a.push(3);
	a.pop();
	a.shift();	
}
arrPush(arr);
console.log(arr);
function objMeth(obj) {
	const o = obj;
	o.method = function(){
		console.log("get Good");
	}
}
objMeth(obj);
obj.method();
