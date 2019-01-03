const arr = [1,2,2,3,1,]
const hash = arr.reduce( (hashTemp, elmt) => {
		hashTemp[elmt] = (hashTemp[elmt] || 0) +1
		return hashTemp;
}, {})
console.log(hash);
const otherHash = {};
arr.forEach( elmt => {
	otherHash[elmt] = (otherHash[elmt] + 1 || 1) 
})
console.log(otherHash);
