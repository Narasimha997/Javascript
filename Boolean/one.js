let str1="javascript"
let str2="javascript"
console.log("These Two symbol are The are Same",str1===str2)          // In these case we given same matter for two vriables then we get the out put is true
let sym1=Symbol("javascript");
let sym2=Symbol("javascript");
console.log("These Two symbol are The are Same",sym1===sym2)          // Now in this the everythig is same but the we get is false why because we used Symbol() datatype it is unique so even we entered the same value by using Symbol() still we get false in the output