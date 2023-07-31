function OrderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Place your sandwich order !");
    if (items.length === 0) {
        console.log("No items specified____");
    }
    else {
        console.log("Items :");
        for (var i = 0; i < items.length; i++) {
            var it = items[i];
            console.log("-" + it);
        }
    }
    console.log("-----------");
}
OrderSandwich("Turkey", "Cheese", "Tomato");
OrderSandwich("Ham", "Swiss");
OrderSandwich("Swiss");
