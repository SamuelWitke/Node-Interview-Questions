const a = ['get','good','plz','i fucking hate',"1"]
const filter = a.filter( elmt => {
	return elmt.indexOf("g") > -1;
})
console.log(filter);
