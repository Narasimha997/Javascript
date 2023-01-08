// "And" operator (&&)
let x=1;
let y=2;
let z=3;
//With these variables in mind, we are going to have a look at the logical operators:
console.log(x<y && y<z);
/* This will log true, you can read it like this: if x is smaller than y and y is smaller
than z, it will log true. That is the case, so it will log true. */
// Example -1
let a=1;
let b=2;
let c=3;
console.log(a>b && b>c);
/*Since a is not greater than b, one part of the expression is not true, and therefore
it will result in false. */