const GetGood = (string) => {
	const hash = new Set();
	const permutate = (string) => {
		const results = [];
		if(string.length === 1) {
			results.push(string);
		}
		for(let i=0;i<string.length;i++){
			const elmt = string[i];
			const leftOver = string.substring(0,i) + string.substring(i+1);
			const array = permutate(leftOver);
			for(let j=0;j<array.length;j++){
				const rotate = elmt + array[j];
				if(!hash.has(rotate)){
					hash.add(rotate);
					results.push(rotate);
				}
			}
		}
		return results;
	}
	return permutate(string);
}
console.log(GetGood("133"));
const search = (ar)  => { 
	ar.sort( (a,b) => a - b);
	let l = 0, r = ar.length - 1; 
	while (l <= r)  { 
		let mid = Math.floor((l + r) / 2); 
		// If this is the first element  
		// which is not index + 1, then  
		// missing element is mid+1 
		if (ar[mid] != mid + 1 &&  
			ar[mid - 1] == mid) 
			return (mid + 1); 

		// if this is not the first 
		// missing element search 
		// in left side 
		if (ar[mid] != mid + 1) 
			r = mid - 1; 

		// if it follows index+1 
		// property then search 
		// in right side 
		else
			l = mid + 1; 
	} 

	// if no element is missing 
	return -1; 
}

const arr = [1,5,4,8,6,7,3,9];

const len = arr.length;
const total = len * (len+1) / 2
const arrayTotal = arr.reduce((t,i) => t + i);

console.log(total - arrayTotal, total, arrayTotal);

console.log(search(arr));

