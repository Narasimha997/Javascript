let arr=[{street:"2nd street",number:"123",zipcode:33116,city:"Miami",state:"Florid"},
{street:"3rd street",number:"124",zipcode:33117,city:"Addison",state:"Texas"}];
let streetName=arr[0].street;
let number=arr[0].number;
console.log(streetName);
console.log(number);
arr[0].street="4th street";        //Update
console.log(arr);
arr[0].number=134;
console.log(arr);