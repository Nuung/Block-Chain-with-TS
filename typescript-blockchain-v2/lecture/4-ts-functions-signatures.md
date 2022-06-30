
# TS 함수 선언과 형태의 특징

## Call Signatures

- A call signature has the implementation of the function.: No
    - 함수를 정의하거나 함수 자체의 비즈니스 로직은 정의하지 않는다
- Call Signatures will be compiled into Typescript: No
    - 


```typescript
const add = (a : number, b : number) => a + b;

// add 함수만의 type을 만들고 싶다!! -> call signatures
// 마우스 오버 했을 때 위에 뜨는 가이드라인, 타입 미리 보기 같은 것
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

=> js에서는 function도 object, 그 Ojbect의 타입을 미리 선언해주고, 그 object가 어떤 값을 가지는지 fix 해 두는 것!
=> 인터페이스 느낌으로 미리 선언을 할 수 있다는 것이다! 설계에 초점이 맞춰져 있다!

```

## Overloading, 오버로딩

```typescript
type Add = {
    (a: number, b: number) : number
}

// call signature를 위와 같이 사용할 수 있다
// 왜? 오버로딩을 위해, 다양한 콜 시그니쳐다!

type Add = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}
const add: Add = (a, b) => {
    if (typeof b === "string" ) return a
    return a + b
}

=> 아주 나쁜 예시지만, 위와 같이 사용을 할 수 있다.
=> 오버로딩은 여러 콜시그니처가 있는 함수이다!

// nextjs의 예!시!
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") console.log(config);
    else console.log(config.path, config.state);
};
=> 위와 같이 하나의 함수에 다양한 형태의 표현이 가능하다

// 또는 파라미터 개수도 다양하게 넣을 수 있다!

type Add = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const add: Add = (a, b, c) => {
    return a + b; // c는 옵셔널하게 사용을 하는 것이다. 
}
=> 하지만 위가 같이 쓰면 에러! c를 사용안하니까! 아래처럼 써야한다
const add: Add = (a, b, c?: number) => { // c는 옵셔널한 것이 명백해짐
    if (c) return a + b + c
    return a + b; 
}

```

## Polymorphism, 다형성 - 제네릭 generic

- 그리스어 Poly : many, serveral, much, multi
    - Poly + gon (각) 생각, 많은 각
- 그리스어 Morphism : form, structure
    - 형태, 구조, 모양 등의 의미
- 여러 다른 구조, 여러 다른 형태 정도의 원어의미 해석 가능

```typescript
type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i));
}

superPrint([1, 2, 3, 4]); // 가능
superPrint([true, true, true, false]); // 가능
superPrint(["a", "b", "c", "d"]); // 불가능!
=> 그러면 SuperPrint 에다가 (arr: string[]): void 만 추가하면 되는것 아니냐?
=> 모든 concrete type 에 할 수 있다. 만약 이게 아주 다양한 형태의 Type을 받아야 한다면?!
superPrint([1, 2, "c", "true"]); // 불가능!
=> 이걸 가능하게 하고 싶다! 이제 제네릭을 써보자!


type SuperPrint = {
    // 여기서 T가 무엇이냐? 왜 T냐? 자체에 직중할 필요가 없다, 어떤 단어도 된다
    <T> (arr: T[]): void // 이 call signature가 제네릭을 받는다!
    <T> (arr: T[]): T // 와 같이 사용 가능하다!
};
=> 게다가 마우스를 오버해서 뜨는 콜 시그니처도 인자로 넣은 type 형태로 바뀐다! 

tpye SuperPrint = <T> (a: T[]) => T
type SuperPrint = (a: T[]) => T // 안됨

// 하나의 제네릭을 더 추가하고 싶다면?!?!
type SuperPrint = <T, M> (a: T[], b: M) => T
=> 처음 사용되는 지점에 어떤 타입으로 사용되는지 ts가 판단할 수 있다.



```

- any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
- any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.

## 실 사용의 제네릭 살펴보기 

- 가장 유용한 경우는, 라이브러리로 만들어서 배포할 때
- 다른 개발자가 그 라이브러리를 활용하게 하려면 제네릭이 좋다.
- 제네릭을 선언하는 것 보다, 제레릭을 활용하고 사용하는 경우가 훨씬 많을 것 이다.

```typescript


```

