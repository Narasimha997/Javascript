// Not (!) operator
let a=false;
console.log(!a);
/* This will log true, since it will simply flip the value of the Boolean. You can also
negate an expression that evaluates to a Boolean, but you would have to make sure
that the expression gets evaluated first by grouping it.*/
let x = 1;
let y = 2;
console.log(!(x < y));
/*x is smaller than y, so the expression evaluates to true. But, it gets negated due to the
exclamation mark and prints false to the console.*/