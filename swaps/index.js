const arr = [4,3,1,2]   
const arrpos =  arr.reduce( (arr,elmt,i) => {
	arr.push({elmt,i})
	return arr;
}, []);
arrpos.sort( (a,b) => a.elmt - b.elmt);
const vis = [];
let ans = 0;
for(let i=0;i<arr.length;i++){
	if(vis[i] || arrpos[i].i === i) continue;
	let cycle_size = 0;
	let j = i;
	while(!vis[j]) {
		vis[j] = true;
		j = arrpos[j].i;
		cycle_size++;
	}
	if(cycle_size > 0){
		ans += cycle_size -1;
	}
}

console.log(arrpos,ans);
