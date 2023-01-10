/* Let's say we want to have an object for a company. This company will have an
address. And an address is another object. If we give our company an address,
we are using an object inside an object: */
let company={
    companynae:"Healthy Candy",
    activity:"Food Manufacturing",
    address:{
        street:"2nd street",
        number:123,
        zipcode:"33116",
        city:"Miami",
        state:"Florida",
    },   // Here,  ","  is important because it will separate with the property
    yearOfEstablishment:2021
}

/* To access or modify one of the properties of the address here, we can use two
approaches: */

// First Way to access or modify
company.address.zipcode="33117";
console.log(company);

// Second Way to access or modify

company["address"]["number"]="100";
console.log(company);

/* 
Output :
{
  companynae: 'Healthy Candy',
  activity: 'Food Manufacturing',
  address: {
    street: '2nd street',
    number: '100',      // Here the number is update from '123' to '100'
    zipcode: '33117',    // Here the zipcode is update from '33116' to '33117'
    city: 'Miami',
    state: 'Florida'
  },
  yearOfEstablishment: 2021
} 
*/