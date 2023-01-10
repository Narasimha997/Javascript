//  For finding index number of an element inside of an array
// indexOf();
let arr=[1,3,5,7]
console.log(arr.indexOf(7));
// Output : 3
// When we try to an element index number which is not in the array it will return "-1"
console.log(arr.indexOf(11));
// Ouput : -1
/* It will return -1 because the array does not contain 11. */
/* If you want to find the next occurrence of the specified number, you can add a
second argument to indexOf(), specifying from which position it should start
searching: */
console.log(arr.indexOf(3,2));      // indexOf(element,indexnumber);
// Output : -1
/* n this case, it will return -1, because 3 cannot be found starting
from index 2 */