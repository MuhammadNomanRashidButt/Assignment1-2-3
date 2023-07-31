var user_name = ["Admin", "Ali", "Hassan", "Uzair", "Mujtaba", "Ahmed"];
for (var i = 0; i < user_name.length; i++) {
    var name_1 = user_name[i];
    if (name_1 === "Admin") {
        console.log("Hello " + name_1 + " would you like to see a status report?");
    }
    else {
        console.log("Hello " + name_1 + " thankyou for logging in again!");
    }
}
