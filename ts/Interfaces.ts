interface Person {
    name: string,
    age: number,
};

// 接口，一般建议首字母大写,参数类型一致，数量一致

let Bob: Person = {
    name: 'Bob',
    age: 17,
    // age: '17', // 会报错
};

interface MyPerson {
    type: string,
    lv: number,
    age? : number, // age是可以不存在的,但是不能多出接口中不存在的属性
}

let Alice: MyPerson = {
    type: '小学生',
    lv: 5,
};
let Cindy: MyPerson = {
    type: '中学生',
    lv: 7,
    age: 17,
};
let Dave: MyPerson = {
    type: '中学生',
    lv: 7,
    // name: 'asa', // 接口中不存在的类型会提示错误的
};

// 接口中存在任意的属性
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface AllPerson {
    name: string, // number类型就是错误, 或者把propName的属性值类型改成any
    age? : string,
    [propName: string]: string, // 任意属性要能包括确定属性和可选属性，any
};

// 属性加上只读
interface Interface {
    readonly type: string,
    name: number,
    [propName: string]: any,
}

