const isValid = function(s) {
   const map = {
       "[" : "]",
       "{" : "}",
       "(" : ")",
   } 
   const stack = [];
   for(let i=0;i<s.length;i++){
       //console.log(stack,s[i])
       if(Object.keys(map).includes(s[i])){
          stack.push(map[s[i]]) 
       }else if(stack.pop() !== s[i]) return false;
   }
   return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("(])"));
console.log(isValid("{([])}"));
console.log(isValid("{}([]){}"));
