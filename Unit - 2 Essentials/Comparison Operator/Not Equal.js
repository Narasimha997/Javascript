// Not Equla(!=)
let a="5"
let b=5
console.log(a!=b);
/*This will log false to the console. If you are wondering what is going on here, take
a look again at the double and triple equals operators, because it is the same here.
However, when there is only one equals sign in a not-equal operator, it is comparing
loosely for non-equality. Therefore, it concludes that they are equal and therefore not
equal should result in false. The one with two equals signs is checking for strict nonequality:
console.log(a !== b);
This will conclude that since x and y have different data types, they are not the
same, and will log true to the console. */