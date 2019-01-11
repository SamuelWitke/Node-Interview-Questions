function longestPalindrome(string) {
	let res = "";
	helper(string);
	function helper(s) {
		if (s.length <= 1) return s;
		for (let i = 0; i < s.length; i++){
			midExpansion(s, i, i);
			midExpansion(s, i , i + 1);
		} 
		return res;
	}
	function midExpansion(s,left,right){
		console.log('before',left,right);
		while (right < s.length && left >= 0  && s[left] == s[right]){
			left--;
			right++;
		}
		console.log('after',left,right,res);
		if (right - left > res.length){
			res = s.substring(left+1, right);
		}

	}
	return res;
}
console.log(longestPalindrome("babad"));
