// 어떤 종류의 변수와 데이터인지 우리가 알려줘야 한다는게 핵심이다 -> js가 못하는 것
console.log("hello world with tsc-watch test");
const name = "Hyeonwoo",
      age = 26,
      gender = "male";

// 아래 함수의 데이터 형태와 리턴값을 보자! 
const sayHi = (name: string, age: number, gender: string): void => {
    console.log(`Hello ${name}, you are ${age} and ${gender}`);
}

const sayHiTwo = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age} and ${gender}`;
}

sayHi(name, age, gender); // js에서 인자가 하나 없어도 실행 시킬꺼임 -> ts는 그게 절대 안됨
// sayHi(name, age);
// 파라미터에 ?라는 기호를 붙이면 옵셔널한 파라미터가 됨, 없어도 실행되고 undefined로 뜸
// 파라미터에 data type을 정의할 수 있다. (python에서 한 것과 비슷하넹)
sayHi(name, age, "213"); // 숫자를 넣으면 컴파일이 안될꺼임 -> 데이터 형과 다르니까 
console.log(sayHiTwo("!@3123", 123, "FDsg"));

//------------------------------------------------------------------------// 

// 하단 #0.6 Interfaces on Typescript / JS에서는 안되는 것들 
// 블록체인에서 하나의 블럭이 interface가 될 수 있다. 
// js 파일로 변경될때, interface는 문제가 발생할 수 있어서 변환이 안된다 -> class를 쓴다 
// interface Human {
//     name: String;
//     age: Number;
//     gender: String;
// }

class Human { // 놀랍도록 java와 비슷하게 느껴진다! 사실 객체를 컨셉이 다 비슷한듯 
    public name: String;
    public age: Number; // private는 class 내부에서만 접근 가능 
    public gender: String;
    constructor(name: String, age: Number, gender?: String) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}


const person = { // object를 하나 만들었다 (without class object)
    name: "Hyeon Woo, Jeong",
    age: 22,
    gender: "male"
};

// class object 만들기 
const hyeon = new Human("HYEON WOO FROM CALSS", 222, "Female"); 

// object를 표현하는 방법이다 / interface의 atribute와 type을 바로 알 수 있음 
const sayHiToHuman = (person: Human): void => { // type자체가 interface 'Human'이 되었다 
    console.log(`Hello ${person.name}, you are ${person.age} and ${person.gender}`);
};

sayHiToHuman(person);
sayHiToHuman(hyeon);

export {}; // 이거 없으면 변수 선언 할 수 없다고 뜰꺼임 