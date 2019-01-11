setTimeout( () => console.log(1),0)
setImmediate( () => console.log(2)) 

const p = new Promise( resolve => resolve(4))
p.then(console.log);

const end = Date.now() + 5000;
while(Date.now() === end){}
console.log(3);
