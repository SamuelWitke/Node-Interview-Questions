function findMinMax(arry){
	const min = Math.min.apply(null,arry);
	const sum = arry.reduce( (acc,elmt) => acc + elmt);
	console.log(min,arry,sum)
}

findMinMax([1,2,3,4]);
