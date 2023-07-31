var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Array of destinations
var traveldestinations = ["Germany", "England", "Turkey", "Capetown", "Sydney"];
//Original Order
console.log("Original Order: " + traveldestinations);
//Alphabetical Order
console.log("Alphabetical Order: " + __spreadArray([], traveldestinations, true).sort());
//Still in original order
console.log("Original order unchanged: " + traveldestinations);
//Printing the array in reverse alphabetical order
console.log("Reverse Alphabetical Order: " + __spreadArray([], traveldestinations, true).sort().reverse());
//Still in original order
console.log("Original Order still unchanged: " + traveldestinations);
//Changing order of original list
console.log("Original list order changed: " + traveldestinations.reverse());
//Original list back in its original order
console.log("Original list back in its original order: " + traveldestinations.reverse());
//Original array in alphabetical order
console.log("Original array order changed alphabateically: " + traveldestinations.sort());
//Original array in reverese alphabetical order
console.log("Original array in reverse alphabetical order: " + traveldestinations.reverse());
