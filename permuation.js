/*
 * 123
 * 231
 *

*/
function getAll(string){
	const hash = new Map();
	function getAllPermuations(string) {
		const results = [];
		if(string.length === 1) {
				results.push(string);
			return results;
		}
		for(let i=0;i < string.length;i++){
			const elmt = string[i];
			const left = string.substring(0,i) + string.substring(i+1);
			const  permutations = getAllPermuations(left);
			for(let j =0; j<permutations.length;j++){
				const val = elmt + permutations[j]  
				if(!hash.has(val)) {
					hash.set(val,true);
					results.push(val);
				}
			}
		}
		return results;
	}
	return getAllPermuations(string);	
}
console.log(getAll("123"));
/*
function heapPermutation(total,array,size) {
	if(size === 1){ 
		console.log(array);
	}
	for(let i=0;i<size;i++){
		heapPermutation(total,array,size-1);
		if(size % 2 ===1) {
			let temp = array[0];
			array[0] = array[size-1]
			array[size -1 ] = temp;
		}
		else{
			let temp = array[i];
			array[i] = array[size -1];
			array[size-1] = temp;
		}
	}
}
console.log(heapPermutation([],[1,2,3],3));
*/
