/* 1. Create an empty array to use as a shopping list. */
let list=["mango","grapes","orange"];
console.log(list);

/* 2. Add Milk, Bread, and Apples to your list. */
list.push("milk","bread","apples")
console.log(list);

/* 3. Update "Bread" with Bananas and Eggs. */
list.splice(4,1,"banana","eggs")
console.log(list);

/* 4. Remove the last item from the array and output it into the console. */
list.pop()
console.log(list);

/* 5. Sort the list alphabetically. */
list.sort()
console.log(list);

/* 6. Find and output the index value of Milk. */
console.log(list.indexOf("milk"));

/* 7. After Bananas, add Carrots and Lettuce. */
list.splice(1,0,"carrot","lecttuce")
console.log(list);

/* 8. Create a new list containing Juice and Pop. */
shoplist=["juice","pop"]
console.log(shoplist);

/* 9. Combine both lists, adding the new list twice to the end of the first list. */
list=list.concat(shoplist)
console.log(list);

/* 10. Get the last index value of Pop and output it to the console. */
console.log(list.lastIndexOf("pop"));