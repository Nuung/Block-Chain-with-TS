
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

```typescript

```

