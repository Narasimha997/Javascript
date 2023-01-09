// Adding two array into new array
// conact();
let num=[1,2,3]
let num2=[4,5,6]
let num3=num.concat(num2);
console.log(num3);
// Output : [ 1, 2, 3, 4, 5, 6 ]
/* This concat() method can do even more! We can use it to add values as well. We can
add a single value, or we can comma-separate multiple values: */
let num4=num3.concat(7,8,9);
console.log(num4);