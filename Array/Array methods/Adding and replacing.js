// Adding an element
// Push();
let fruit=["mango","apple","watermelon"];
console.log(fruit);
fruit.push("cherry");
console.log(fruit);      // Here push() method will add a element into array at the end
// We get new array length
console.log(fruit.length);
// Adding an element at certain index number
// splice() : this method is used to add element at certain index value
// splice(index number,deleting an element after the addition of new element)
let shape=["triangle","cricle","rectangle","hexagon"]
shape.splice(2,0,"square","pentagon")   // here 2 is the index number where we want to add our element and 0 is for deleting the remaining elements after the 2 index number
console.log(shape);
// Output : [ 'triangle', 'cricle', 'square', 'pentagon', 'rectangle', 'hexagon' ]
// Example - 1
let animal=["lion","tiger","monkey","fox"]
animal.splice(2,2,"elephant","rhino")  // In the log monkey and fox will replaced by elephant and rhino
console.log(animal);
// output : [ 'lion', 'tiger', 'elephant', 'rhino' ]