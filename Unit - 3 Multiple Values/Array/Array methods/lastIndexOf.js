// lastIndexOf();
// Finding the last index of an array
let arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.lastIndexOf(9));
// It will return 8 because the index of 9 is 8
// Output : 8
// In case other case like when an array has duplicate elements
arr=[1,2,3,4,5,6,7,8,9,8,7]
console.log(arr.lastIndexOf(8));
// It will return 9 because even first 8 is in 7th position but still it only return last one only.
// Output : 9