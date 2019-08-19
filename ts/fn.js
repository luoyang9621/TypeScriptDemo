// 常见的函数声明
function f1(x, y) {
    return x + y;
}
var f2 = function (x, y) {
    return x + y;
};
// 而在ts中，输入输出都可以增加约束
function f3(x, y) {
    return x + y;
}
var total = f3(1, 2); // 输入或多或少的参数数量会提示错误f3(1, 2, 3)
// 手动给 total2 添加类型
var total2 = function (x, y) {
    return x + y;
};
var f4;
f4 = function (x, y) {
    return x.indexOf(y) > -1;
};
function f5(firstname, lastname) {
    return lastname ? firstname + lastname : firstname;
}
function f6(x, y) {
    if (x === void 0) { x = 1; }
    return x + y;
}
var total3 = f6(undefined, 2);
console.log(total3);
