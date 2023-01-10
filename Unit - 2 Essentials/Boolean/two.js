// Symbol() is the ES6 feature when it is important that variable are not equal evrn thouhg their value and the type are the same 
let sym1=Symbol("javascript");
let sym2=Symbol("javascript");
console.log("These Two symbol are The are Same",sym1 !==sym2)          // Now in this the everythig is same but the we get is false why because we used Symbol() datatype it is unique so even we entered the same value by using Symbol() still we get false in the output