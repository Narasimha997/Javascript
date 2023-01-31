// Manipulating An Array:
// Which means create an array we can include an object, array inside array
const thelist=['name','sun',true,90,{test:'one',score:237},['dry','hot']]
console.log(thelist);
// The last one inside the array will be removed 
thelist.pop()
console.log(thelist);
// Add at the start of the array
thelist.unshift('ramp')
console.log(thelist);
// Assign 'google' to the fourth item value.
thelist.splice(4,0,"google")
console.log(thelist);
// Assign MIDDLE to the third index value.
thelist.splice(3,1,'middle')
console.log(thelist);
// Add LAST to the last position in the array.
thelist.push('last')
console.log(thelist);