let round=undefined;
let around;
console.log("same",round===around);                 // Now,we get output is true because we defined to a variable has undefined and another one we didn't given any value still we get output has true
let stuck=null;
console.log("it is also same",round===stuck);       // Now coming to this case we get output has false which was explicitly declared with a
                                                    // value of null, are not equal.