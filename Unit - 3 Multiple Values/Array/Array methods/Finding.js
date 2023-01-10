// Fiding an element in an array by using
// find();
let arr=[2,6,7,8,10]
let findValue=arr.find(function(e)
{
    return e===6;
});
let findValue2=arr.find((e)=>{
    return e===10
});
console.log(findValue,findValue2);