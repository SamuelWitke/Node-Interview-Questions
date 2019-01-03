const arr = [1,2,4];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(1);

const p1 = new Promise( resolve => resolve(arr.find( elmt => elmt === 2)));
p1.then( data => console.log('here',data)) ;

const p = (data, type, cb) => new Promise( resolve => resolve(data[type](cb)))

const callback = (elmt) => elmt === 2;
const wordCallBack = (elmt) => elmt.length > 6;

p(words,'filter', wordCallBack).then(  data => console.log(data) );

process.nextTick( () => {
   console.log(3);
});

console.log(4);
