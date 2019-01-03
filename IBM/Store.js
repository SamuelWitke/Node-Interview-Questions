let n = 50;
 const cost = [15,20,40,10];
 const amt = [20,3,14,20];
// const cost = [20,19];
// const amt = [24,20];

const hash = cost.reduce( (hash, elmt,i) => {
    hash[elmt*amt[i]] = [elmt,amt[i]]; 
    return hash;
}, {});

keys = Object.keys(hash).sort( (a,b) => {
    return a - b;
})

console.log(cost, keys, hash);

let i=keys.length-1;
while(n>0){
    const prod = keys[i];
    n -= hash[prod][0];
    console.log(n,hash[prod][1])
}


