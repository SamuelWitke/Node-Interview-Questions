console.log("start")
setTimeout( () => {
		process.exit(0)
	console.log("setTimeout",0)
},0);
fun();

const promise = new Promise( (res,reject) => {
	console.log("2 function")
	res("promise done");
});

promise.then( res => console.log(res));

f().then( res => console.log(res));

for(let i=0;i<10000;i++){}


async function fun() {
	  let promise = new Promise((resolve, reject) => {
			    setTimeout(() => resolve("done!"), 0)
			  });
	  console.log("1 function "); // "done!"
	  let result = await promise; // wait till the promise resolves (*)

	  console.log("async await done"); // "done!"

}

console.log("mid")

async function f() {
	console.log("3 function")
	throw new Error();
  return "async done";
}


console.log("end")
