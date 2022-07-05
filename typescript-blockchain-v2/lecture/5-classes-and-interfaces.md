
# 클래스와 인터페이스!

```typescript
class Player {
    // js 에서는 (안에 인자로 받을 파라미터) { this.멤버변수 = 파라미터 } 정의 형태였다!
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
}

const hyeonwoo = new Player("hyeonwoo", "last", "nick");
hyeonwoo.firstName; // Not working 왜냐하면 private
=> 하지만 실제 위 코드는 사실 js에서는 터진다! ts에서만 오류를 뱉는 것!
```

## 추상 클래스 

```typescript
// abstract은 에초에 JS에 존재하지 않는다!
// 접근 제한자 (private, public) 도 존재하지 않는다!
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        protected nickName: string
    ) {}

    // 일반 메소드 - 접근 제한자 선언 가능
    getFullName() {
        return `${this.firstName}, ${this.lastName}`
    }

    // 추상 메소드!? => call signature 만 써줘야한다!!!!
    abstract getNickName(): void
}


// 부모 class에 있는 abstract method는 자식이 무조건 구현해야 한다!!! implement 해야한다!!
class Player extends User {
    getNickName() {
        // 근데 생성자에서 nickName를 private으로 만들었으면
        // "자식에서도 접근하지 못한다!!" 
        // 외부 접근을 막고, 자식 클래스에서만 호출 가능하게 하려면 "protected" 를 사용하면 된다!!!
        console.log(this.nickName);
    }
}
const hyeonwoo = new User("hyeonwoo", "last", "nick"); // 이건 작동 안한다! 추상 클래스 인스턴스 생성 X
const hyeonwoo = new Player("hyeonwoo", "last", "nick"); // 
hyeonwoo.nickName;
hyeonwoo.getFullName();
```

- 다시 실습하기 

```typescript

type Words = {
    // key에 어떤 단어가 들어가도 된다, 아래와 같이!!
    // [whatever: string]: string
    [key: string]: string
}

// wtf? [key: string]?!?
// string만 property로 가지는 object라는 것이 바로 words type이다!
let dict: Words = {
    "potato": "food",
    123: "not allowed!, not working!! dont do this!!" // 이게 되려면 [key: number]: string
}


class Dict {
    private words: Words

    // 비어있는 값으로 만들어 주고 싶으니까 직접 생성자를 쓴다
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
        return this.words[term];
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 전통 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
```

---

## 인터페이스!

- 위에서 dict, word 등의 class는 모두 public 이다!!
- word 의 멤버변수를 외부 접근해서 수정을 막으려면 ***readonly***를 붙이면 된다.
    - 데이터 덮어쓰기 방지! 접근만 가능!
    - ts만의 것이다. js에서는 readonly가 없다!
- static은 js에도 있다, ts 만의 문법이 아님!
    - class자체.staticmethod 로 접근해서 호출 가능
- interface는 type과 같으면서 다르다. type을 복기해 보자
- 하지만 ts에만 존재하고 js에서는 interface란 없다!

```typescript
// type Team = string; 
// 위 대신에 특정 string으로 Category를 fix할 수 있다 => java enum을 생각해보자! 
type Team = "red" | "blue" | "yellow"; 

type Player = {
    nickname: string,
    // team: string, 
    // 위 값을 특정 string만 가능하게!
    team: Team
};

const nico: Player = {
    nickname: "nico",
    team: "red" // not white or black!! (can't)
}

/**
 * @desc 오브젝트를 설명하는 다른 방법인 인터페이스!
 */

interface Person {
    nickname: string,
    team: Team
}

=> 오직 한가지의 용도로만 사용할 수 있다, type은 이보다 더 자유롭도 다양하다!
=> 오브젝트의 모양을 특정, fix 해주기 위한 것이다. 

// interface Hello = string; // 이런것은 못한다! alias같은것 못한다!!

// OOP의 class 처럼 느껴진다.
// extends와 같이 상속이 된다.

interface User {
    readonly name: string
}

interface Player extends User {

}

const nico : Player = {
    name: "nico"
}

=> 위가 type으로 된다면, 
=> 아래와 같이 이뤄진다. "&" 연산자를 보자!

type UserType = {
    name: string
}

type PlayerType = UserType & {

}

const hyeonwoo : Player = {
    name: "nico"
}


```

