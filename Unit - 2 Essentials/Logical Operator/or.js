// "Or" operator (||)
/* If you want to get true if either one of the expressions is true, you use or. The
operator for this is ||. */
// Example - 1
let a=1;
let b=2;
let c=3;
console.log(a>b || b<c);
/* These pipes are used to see if either one of these two is true,
in which case the whole expression evaluates to true. */
// In the above example we get true but one case is false but the other case is true.
// We used || operator if one is false and another one is true it will only show true one only.
// Example - 2
let d=1;
let e=2;
let f=3;
console.log(d>e || e>f);
// Here, When both sides are false, it will log false.