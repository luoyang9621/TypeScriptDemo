var a = 'hello world'; // string字符串
var b = 123; // number类型
var c = false; // 布尔值
var d = undefined; // undefined
var e = null; // null
var f = {}; // 对象Object类型
var g = []; // 数组
var g2 = []; // 数组里面任何类型都可以
var g3 = []; // 数组里面只能存储对象
var h = 'asdas'; // 任何值都行
var i = ['123', {}]; // Tuple元组类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // 枚举
var j = Color.Red; //
var k = null; // 空值
var m = 'hhh';
var n = m.length; // 类型断言
var mLen = m.length; // 类型断言
