function stringCompress(s) {
	let i =0;
	let newString = '';
	let count =0;
	while(i < s.length) {
		count++;
		if(s[i+1] !== s[i]){
			newString += `${s[i]}${count}`;
			count=0;
		}
		i++;
	}
	return newString;
}
module.exports = stringCompress;
