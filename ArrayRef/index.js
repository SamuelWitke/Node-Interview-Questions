let a = [1,2,3];
function helper(a){
	a.push(1);
	a = [];
}

helper(a);
console.log(a);
