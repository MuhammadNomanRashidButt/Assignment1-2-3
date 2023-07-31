function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I Love Type Script'; }
    console.log("You ordered " + size + " shirt with message " + message);
}
make_shirt();
make_shirt("Medium");
make_shirt("small");
