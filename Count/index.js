function count(c,s){
	const hash = s.split("").reduce( (hash,elmt) => {
		hash[elmt] = (hash[elmt] + 1) || 1;
		return hash;
	},{});
	return hash[c] || 0;
}
console.log(count("c","cccc"));
