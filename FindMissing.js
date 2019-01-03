function search(arr) {
	let a = 0, b = arr.length -1;
	let mid = 0;
	while( a <= b) {
		mid = Math.floor( (a+b) /2);
		if( arr[mid] !== mid + 1 && arr[mid -1] == mid) {
			return mid +1;
		}
		if( arr[mid] !== mid + 1) {
			b = mid -1;
		}
		else 
			a = mid +1 
	}
	return -1;
}
console.log(search([1,2,3,5,6,7,8]));
