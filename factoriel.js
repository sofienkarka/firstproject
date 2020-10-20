function facto(c) {
    var i;
    var f = 1;
    if (c == 0) {
        f = 1;
    }
    else {
        for (i = 1; i <= c; i++) {
            f = f * i;
        }
    }
    console.log("factorielle de f est", (f));
}
facto(5);
