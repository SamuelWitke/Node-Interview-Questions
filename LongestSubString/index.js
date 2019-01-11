function longestSubString(s1,s2) {
	let i = 0;
	let j = 0;
	let s = "";
	while(i < s1.length && j < s2.length ) {
		if(s1[i] === s2[j]) {
			console.log(s1[i],s2[j],i,j);
			s += s1[i]; 
			i++;
			j++
			//Something 
		}else{
			let temp =j
			while(j < s2.length && s1[i] !== s2[j]){
				j++;
			}
	    if(!s2[j]){
				i++;
				j = temp;
				console.log("here",s1[i],s2[j],i,j);
			}
		}
	}
	return s;
}

console.log(longestSubString("ABBA","ABCABA"));
console.log(longestSubString("ABAZDC","BACBAD"));
console.log(longestSubString("aaaa","aa"));
console.log(longestSubString("AGGTAB","GXTXAYB"));
