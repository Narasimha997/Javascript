// How do you replace the second element in an array myArr = [1,3,5,6,8,9,15] with the value 4?
const myarr=[1,3,5,6,8,9,15]
myarr[1]=4
console.log(myarr);

// Output in the console for the following example
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);
// Output : 
//[ <10 empty items>, 'test' ]
// undefined

//What is the output in the console?
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
