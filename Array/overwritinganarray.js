// Using let and updating an array
let arr1=["hi there"]
arr1[0]="hi"; 
console.log(arr1);
arr1=["hi there,you"]   // It will update and overwrites the old one 
console.log(arr1);
// Using const and trying to update value in an array
const arr2=["hi,hello"];
arr2[0]="hi";
console.log(arr2);   // Here it didnt effect the const why because we used the index number to update the value inside of an array so it doesn't show any errror
// Trying to update const value
arr2=["new"];
console.log(arr2);
// The output is:
//TypeError: Assignment to constant variable.
// We can update an array which is assign to the const, only by using it's index value 
// We can't update a const and it's nature is we cannot redeclare and update a const variable