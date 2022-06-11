"use strict";
function areaOFShapes(a, c, b) {
    if (c == "square") {
        return a * a;
    }
    else if (c == "rectangle" && b) {
        return a * b;
    }
    else if (c == "triangle" && b) {
        return 0.5 * a * b;
    }
    return 3.14 * a * a;
}
let ans = areaOFShapes(10, "rectangle", 45);
console.log(ans);
// default
function areadefaultShapes(a, c, b = 20) {
    if (c == "square") {
        return a * a;
    }
    else if (c == "rectangle") {
        return a * b;
    }
    else if (c == "triangle") {
        return 0.5 * a * b;
    }
    return 3.14 * a * a;
}
let ans2 = areaOFShapes(10, "circle", 45);
console.log(ans2);
function sum(...a) {
    let total = 0;
    a.forEach((num) => total = total + num);
    return total;
}
let ans3 = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30);
console.log(ans3);
