let createCounter = () => {
	let counter = 0;
  return closureFunc = () => ++counter
}

let inc = createCounter();
createCounter = () => 0;
const c1 = inc();
const c2 = inc();
const c3 = inc();
console.log('test increment',c1,c2,c3);

const scope = {val: 0};
let scope1 = 0; 
let callBackTest = (elmt) => {
  return elmt.hasOwnProperty('val') ?	
	() => setTimeout(() => console.log(elmt.val),3) :  
	() => setTimeout(() => console.log(elmt),3)
}

const time = callBackTest(scope)();
const time1 = callBackTest(scope1)();
scope.val++;
scope1++;

for(var i=0;i<2;i++){
	setTimeout(() => console.log(i),3)
}
