// Accessing Elements
cars=["Toyota","Honda","Suzuki"]
console.log(cars[0]);    // Output : [Toyota]
console.log(cars[1]);     // Output : [Honda]
console.log(cars[2]);     // Output : [Suzuki]
console.log(cars[-1]);    // Output : Undefined
console.log(cars[-3]);    // Output : Undefined
// Overwritin Elements
cars[2]="Tesla"
console.log(cars);
cars[-1]="Kia"
console.log(cars);
console.log(cars[-1]);
// Built-in Length Property
colors=["Black","Orange","Pink"]
boolean=[true,false,false,true]
empty=[]
console.log("Length of Colors:",colors.length);
console.log("Length of Boolean:",boolean.length);
console.log("Length of Empty:",empty.length);
// Array Index Number
lastElement=colors.length-1    // Last index number
console.log(lastElement);
// the non-existent index position
let num=[34,6,78]
num[5]=48
/*The length of the array is only counting the integer numbers starting from 0 up to
the highest filled index. If there are elements in the middle of the sequence that do
not have a value, they will still get counted. In this case, the length becomes 6. If we
log the array, we can see why:*/
console.log("num",num);
// Output : num [ 34, 6, 78, <2 empty items>, 48 ]
/* Because we added an element, 48, at index 5, it also created 2 elements at index
positions 3 and 4 containing empty values. */