/* There is also a built-in method for sorting arrays. It sorts numbers from small to
high and strings A-Z. You can call sort() on an array and the order of the values of
the array will change to a sorted order. */
// sort();
let arr=[1,3,4,9,5,7,2];
console.log(arr.sort());
/*  Output : [
  1, 2, 3, 4,
  5, 7, 9
] */

// In case we having different digits in an array like 446,23,2434 for sorting them
// We have to use this below procedure
// Ascending Order:
let arr1=[1,2,3,34,345,45,62,33454656,243545]
arr2=arr1.sort(function(a,b){
    return a-b;
})
console.log(arr2);
// Output : [ 1, 2, 3, 34, 45, 62, 345, 243545, 33454656 ]

// Descending Order:
let arr3=[1,24,45,6543,5652,323,56,73,4,567,45,57,3]
arr4=arr3.sort(function(a,b){
    return b-a;
})
console.log(arr4);
/* Output :[
  6543, 5652, 567, 323,
    73,   57,  56,  45,
    45,   24,   4,   3,
     1
] */