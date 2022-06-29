
# Implicit types vs Explicit types

- 데이터와 변수 타입을 명시적으로 정의할 수 도 있고
- 또는 js처럼 변수만 생성하고 넘어가도 됨 -> **타입의 추론** (하지만, 필자는, 명시적 정의 추천)
    - 즉 한번 string으로 선언해주면, 계속 그 변수의 type은 string으로! `let a = "hello" // a는 string으로 할당만 가능`
- `let b : boolean = true` 로 완전 명시적으로 타입을 만들어줄 수 있다.

```javascript
// array
let c : number[] = [];
let strArr : string[] = [];
const player = {
    name: "hyeonwoo"
}; // => player.name은 string으로 추론

```
---

# Typescript type system!

## 기본형

- number, string, boolean, string[] ...

## object 형태

```javascript

const player : object = {
    name: "hyeonwoo"
};
// name에 접근하면, object 는 에러를 낸다
// 원시형인 object는 name이라는 어트리뷰트가 없기 때문이다!

const player : {
    name: string,
    age: number
} = {
    name: "hyeonwoo"
};
// 하지만 에러가 난다
// 왜? age를 선언 안 해줬기 때문에!

const player : {
    name: string,
    age?: number
} = {
    name: "hyeonwoo"
};
// ? 를 붙여줘야! or type으로 "undifined를 허용해준다"

// 계속해서 같은 형태 찍어내려는데!! 왜 번 선언해야하나?
type Player = {
    name: string,
    age?: number
};
// 스트럭쳐와 비슷하다, 어떻게보면 class의 멤버변수 형태로 볼 수 있다
// 하지만 스트럭쳐에 가깝고, 제네릭의 타입에 가깝다. go 와 비슷하다. 아니 go가 비슷한거지 ㅎ

const hyeonwoo : Player = {
    name: "hy",
    age: 123
};

// 이렇게도 가능하다. => alias 기능이라고 보자!
type Name = string;
type Age = number;
type Player = {
    name: Name,
    age?: Age
};

```

## 함수에서는? 

```javascript

// 파라미터 변수의 type 선언해주기!
// 하지만 return은? 무엇이 리턴되고, 어떤 형태인지 알고싶어!!
function playerMaker(name: string) {
    return {
        name: name
    }
}
=> 인자가 비어있으면 에러! 게다가 접근할 때 도움되는 메시지도! awsome


function playerMaker(name: string) {
    return {
        name: name
    }
}
const hyeonwoo = playerMaker("hy");
hyeonwoo.age = 12;
=> 아니 위 코드가 ts에서는 error다! 왜!!?
=> ts는 저 함수의 return이 어떤 type의 object인지 모른다!!!!!
=> return 형태 세팅해줘야 한다!!


// 이제 된다 - 편안
function playerMaker(name: string) : Player {
    return {
        name: name
    }
}
const hyeonwoo = playerMaker("hy");
hyeonwoo.age = 12;


```

## arrow function은?

```javascript

const playMaker = (name : string) : Player => { {name} };

```

## Read Only type?!

- 읽기 전용 type!!
- 즉 선언 된 뒤에 (초기값이 세팅된 뒤에) 수정할 수 없어! 
- const의 object type은 내부 속성을 접근해서 편집가능한데, 그것 자체를 막는 것
- ***불변성(Immutability)*** 을 가지게 된다. 

```javascript
type Player = {
    readonly name: Name,
    age: Number
};

const numbers : readonly number[] = [1, 2, 3, 4];
numbers.push(1);
=> Property 'push' does not exist on type 'readonly number[]'.


// 이런 type은어떻게,,?
["nico", 12, true];
const player : [string, number, boolean] = [];
=> Type '[]' is not assignable to type '[string, number, boolean]'. Source has 0 element(s) but target requires 3.

// 어라 근데 이건 되네?
const player : [string, number, boolean] = ["hyeon", 12, true];
=> 정해진 크기, 정해진 순서, 그것들이 정해진 type으로 정해진다면, 당연히 위와 같은 형태의 type선언은 허용이 가능하다!
=> 일종의 tuple 느낌이랄까
// 이렇도 가능하다
const player : readonly [string, number, boolean] = ["hyeon", 12, true];

```

---

## 다른 특이한 타입들

### undefined, null

```javascript

let a : undefined = undefined; // optional type (? 붙였던)이 요놈이 가능하다는 것
let b : null = null;

// 무엇이든 가능한! any type, 비어있으면 기본적으로 any가 됨!
let a = [] // any[] tpye
// any는 어떻게 보면 ts로 탈출할 수 있는 타입 탈출구 ㅎ -> 어떤 타입이든 가능

```

### unknown, void

```javascript
// ts의 유니크한 타입들!!
// 어떤 타입인지 모르겠어요 ... 호에엥
let a : unknown; // 모르니까 값 선언도 못해주겠지?
=> 이 변수로 어떤 작업을 하려면, 요 a의 타입을 먼저 확인을 해야 한다!!

1 + a; // 에러

// 하지만 아래처럼 타입 체크하면!? 가능!
if (typeof a === 'number') {
    const b = a + 1;
}


a.toUpperCase(); // 에러
// 가능
if (typeof a === 'string') {
    a.toUpperCase(); 
}

// void는 return 값이 없을 때!
const hello = (x) : void => {
    console.log(x);
};

// never -> 함수가 절대 return 하지 않을 때!!
// 주로는 error 를 throw할때! 사용 함!
const hello = () : never => {
    throw new Error("xxx");
};

// 또는 return이 or 이라면?
const hello = (name: string | number) : never => {
    if (typeof a === 'string') {
        name
    }
    if (typeof a === 'number') {
        name
    }
    else { // type이 string or number 만 가능하기 대문에 여긴 절대 실행이 안된다!
        name
    }
};

```

---

## 이제 다형성과 오버로딩, 제네릭 그 이상의 세계로!