"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 어떤 종류의 변수와 데이터인지 우리가 알려줘야 한다는게 핵심이다 -> js가 못하는 것
console.log("hello world");
const name = "Hyeonwoo", age = 26, gender = "male";
// 아래 함수의 데이터 형태와 리턴값을 보자! 
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age} and ${gender}`);
};
const sayHiTwo = (name, age, gender) => {
    return `Hello ${name}, you are ${age} and ${gender}`;
};
sayHi(name, age, gender); // js에서 인자가 하나 없어도 실행 시킬꺼임 -> ts는 그게 절대 안됨
// sayHi(name, age);
// 파라미터에 ?라는 기호를 붙이면 옵셔널한 파라미터가 됨, 없어도 실행되고 undefined로 뜸
// 파라미터에 data type을 정의할 수 있다. (python에서 한 것과 비슷하넹)
sayHi(name, age, "213"); // 숫자를 넣으면 컴파일이 안될꺼임 -> 데이터 형과 다르니까 
console.log(sayHiTwo("!@3123", 123, "FDsg"));
//# sourceMappingURL=index.js.map