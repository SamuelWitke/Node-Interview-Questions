function prodExceptSelf(nums) {
	let temp=1;
	let ans = nums.reduce( (ans,elmt,i) => {
		ans[i] = temp
		temp *= elmt;
		return ans;
	},[])   
	temp = 1
	return ans.reduceRight( (ans,elmt,i) => {
		ans[i] *= temp
		temp *= nums[i];
		return ans;
	},ans)
}
module.exports = prodExceptSelf;
