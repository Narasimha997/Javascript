// Creating An Array
arr1=new Array("j","k","l")
arr2=["m","n","o"]
console.log(arr1,arr2);     
// Example - 1
arr3=new Array(10);     // Here is the problem arise as we can see that in the above example the first array we given and the output we got is correct
arr4=[10];              // Now we given same type in the example one but we enterd only one number in the output we got "[ <10 empty items> ]"
console.log(arr3,arr4);
// arr3=new Array(10); this is wrong for creating an array 
// arr4=[10]; Using SQUARE BRACKETS [] is the correct one for creation of an Array
// Example - 2
let arr=["hi there",5,true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
// An array can accept any type of data
/* Output of the above example:
string  - (typeof arr[0])
number  - (typeof arr[1])
boolean - (typeof arr[2])*/