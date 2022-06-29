
# How typescript works!

- ***strongly typed programming language***
- javascript 를 완전 complie하기 전 build 하는 compile 과정을 추가하자!
    - 즉, js가 되기 전에 error catch를 하는 것
- 런타임 에러는 절대 안나게 하자!


## 참고 자료

타입스크립트 코드 테스트
https://www.typescriptlang.org/play

타입스크립트 핸드북
https://typescript-kr.github.io/pages/basic-types.html


## 실습

```javascript
const kimchi = {
    맛있어: true
};

kimchi.hello();
=> Property 'hello' does not exist on type '{ 맛있어: boolean; }'.
=> awsome한 error chatch 할 수 있다. 
=> js는 런타임해야만 "Uncaught TypeError: hyeon.hello is not a function" 라는 에러를 받을 수 있었다.


kimchi.맛있어 = 3;
=> Type 'number' is not assignable to type 'boolean'.
=> 선언이 boolean으로 되어 있었다! -> 강제 형변환을 하는 값 입력으로 error!!


[1, 2, 3, 4, 5] + false;
=> Operator '+' cannot be applied to types 'number[]' and 'boolean'.
=> awsome!

divide(1, "hello");
=> The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

```