//inviting perons to dinner
var invited_personss = ["Hassan", "Hussain", "Ahmed"];
for (var i = 0; i < invited_personss.length; i++) {
    console.log("Dear " + invited_personss[i], ",You are cordially invited to attend the dinner party we have planned for this Sunday.");
}
//replacing a guest with whose unable to attend dinner
var guestunableToAttend = "Hassan";
var newGuest = "Ali";
var index = invited_personss.indexOf(guestunableToAttend);
if (index != -1) {
    invited_personss[index] = newGuest;
    console.log(guestunableToAttend + " cant make it to dinner ,we are inviting " + newGuest + " instead");
}
for (var i = 0; i < invited_personss.length; i++) {
    console.log("Dear " + invited_personss[i] + " you are still invited to dinner.");
}
//Adding guest in start middle and end of array
console.log("Great News! We found a bigger dinner table");
invited_personss.unshift("Hammad");
invited_personss.splice(2, 0, "Hamza");
invited_personss.push("Saad");
for (var i = 0; i < invited_personss.length; i++) {
    console.log("Dear " + invited_personss[i] + " you are still invited to dinner.");
}
//removing guests and only two persons are invited
console.log("Bad news! the new dinner table wont arrive at time,we can invite only two people for dinner.");
while (invited_personss.length > 2) {
    var removedGuest = invited_personss.pop();
    console.log("Sorry " + removedGuest + " we cant invite you to dinner");
}
for (var i = 0; i < invited_personss.length; i++) {
    console.log("Dear " + invited_personss[i] + " you are still invited to dinner.");
}
//number of guests invited
console.log("Total number of guests invited :" + invited_personss.length);
//Making the array empty at the end
invited_personss = [];
console.log("Empty List:" + invited_personss);
