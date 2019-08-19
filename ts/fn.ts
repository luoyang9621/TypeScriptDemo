// 常见的函数声明
function f1(x, y) {
    return x + y;
}
let f2 = function (x, y) {
    return x + y;
}

// 而在ts中，输入输出都可以增加约束

function f3(x: number, y:number): number {
    return x + y;
}

let total = f3(1, 2); // 输入或多或少的参数数量会提示错误f3(1, 2, 3)

// 手动给 total2 添加类型
let total2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

// 用接口定义函数的形状
interface MySearch {
    (a: string, b: string): boolean; // 输入格式: 返回格式
}
let f4: MySearch;
f4 = function (x: string, y: string) {
    return x.indexOf(y) > -1;
}

function f5(firstname: string, lastname?: string): string {
    return lastname ? firstname + lastname : firstname;
}

function f6(x: number = 1, y: number):number {
    return x + y;
}

let total3 = f6(undefined, 2); // 添加默认值，x存在则是x+y，否则1+y
console.log(total3);