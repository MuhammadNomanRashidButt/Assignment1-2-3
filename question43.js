var magiciansss = ["Rock", "Harry", "Brook", "Chris"];
var great_name = magiciansss.slice();
function make_greattt(magiciansss) {
    for (var i = 0; i < magiciansss.length; i++) {
        var name_1 = magiciansss[i];
        console.log("The Great " + name_1);
    }
}
function shows_magicians(magiciansss) {
    for (var i = 0; i < magiciansss.length; i++) {
        var name_2 = magiciansss[i];
        console.log(name_2);
    }
}
make_greattt(magiciansss);
console.log("---------------");
shows_magicians(magiciansss);
