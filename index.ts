// 어떤 종류의 변수와 데이터인지 우리가 알려줘야 한다는게 핵심이다 -> js가 못하는 것
console.log("hello world");
const name = "Hyeonwoo",
      age = 26,
      gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age} and ${gender}`);
}

sayHi(name, age, gender); // js에서 인자가 하나 없어도 실행 시킬꺼임 -> ts는 그게 절대 안됨
// sayHi(name, age);
// 파라미터에 ?라는 기호를 붙이면? 옵셔널한 파라미터가 됨, 없어도 실행되고 undefined로 뜸

export {}; // 이거 없으면 변수 선언 할 수 없다고 뜰꺼임 