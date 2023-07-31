var current_users = ["Uzair", "hammad", "Hassan", "Hussain", "Noman"];
var new_users = ["Salar", "hammad", "Obaid", "Salar", "Uzam"];
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i].toLowerCase();
    if (current_users.includes(new_username)) {
        console.log("Sorry the user name " + new_username + " is already taken! Please enter different user name");
    }
    else {
        console.log("Congratulations! " + new_username + " is availabale");
    }
}
