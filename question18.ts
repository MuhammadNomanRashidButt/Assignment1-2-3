//Array of destinations
let traveldestinations: string[]=["Germany","England","Turkey","Capetown","Sydney"];
//Original Order
console.log("Original Order: "+traveldestinations);
//Alphabetical Order
console.log("Alphabetical Order: "+[...traveldestinations].sort());
//Still in original order
console.log("Original order unchanged: "+traveldestinations);
//Printing the array in reverse alphabetical order
console.log("Reverse Alphabetical Order: "+[...traveldestinations].sort().reverse());
//Still in original order
console.log("Original Order still unchanged: "+traveldestinations);
//Changing order of original list
console.log("Original list order changed: "+traveldestinations.reverse());
//Original list back in its original order
console.log("Original list back in its original order: "+traveldestinations.reverse());
//Original array in alphabetical order
console.log("Original array order changed alphabateically: "+traveldestinations.sort());
//Original array in reverese alphabetical order
console.log("Original array in reverse alphabetical order: "+traveldestinations.reverse());