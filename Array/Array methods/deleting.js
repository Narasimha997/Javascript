// Deleting Elements
/* There are several ways in which you can delete elements from an array. Removing
the last element is done with pop(): */

let num=[1,2,3]
let num2=[4,5,6]
let num3=num.concat(num2)
console.log(num3);
let num4=num3.concat(7,8,9);
console.log(num4);

// Upto here ok we are adding the value and creating new array
// Deleting the last elements in an array

num4.pop();
console.log(num4);
/* Output : [
  1, 2, 3, 4,
  5, 6, 7, 8
] */

// Deleting first value of an array 
// shift();

let num5=["a","b","c","d"]
num5.shift();
console.log(num5);

/* Remember splice()? This is a very special method because we can also use it to
delete values. We specify the index from where we want to start deleting, and then
the number of elements we want to delete. */

let numeric=[1,2,3,4,5,6,7,8]
numeric.splice(1,3)
console.log(numeric);
// Output : [ 1, 5, 6, 7, 8 ]
/* As you can see, 3 elements starting from the second positional index have been
deleted. The values 2, 3, and 4 are gone */

// delete opretaor:
/* If you do not wish to change any of the later
indices, you can also use the operator delete. This is not a method, but you can use it
to change the value of a certain position of the array to undefined: */

let abc=[12,13,14,15]
delete abc[0];
console.log(abc);
// Output : [ <1 empty item>, 13, 14, 15 ]
/* deleting would decrease the number of inputs, whereas that might not be what you would want. */