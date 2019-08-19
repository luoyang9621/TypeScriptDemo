const a: string = 'hello world'; // string字符串
const b: Number = 123; // number类型
const c: boolean = false; // 布尔值
const d: undefined = undefined; // undefined
const e: null = null; // null
const f: object = {}; // 对象Object类型
const g: [] = []; // 数组
const g2: Array<any> = []; // 数组里面任何类型都可以
const g3: Array<object> = []; // 数组里面只能存储对象
const h: any = 'asdas'; // 任何值都行
const i: [string, object] = ['123', {}]; // Tuple元组类型
enum Color {Red, Green, Blue}; // 枚举
const j = Color.Red; //
const k: void = null; // 空值
const m: string = 'hhh';
const n: Number = (<string>m).length; // 类型断言
const mLen: Number = (m as string).length; // 类型断言

// 联合类型,可以赋值为多种类型中的一种
let x: Number | String = 123;
x = 'Alice';
// 联合类型，返回值只能是所有类型共有的属性，length不是string和number共有的属性。所以会报错，
// 换成toString()就不会报错了.
function getLength(something: string | number): string {
    // return something.length;
    return  something.toString();
}