/*
Typescript Classes 를 사용하여, Dict (dictionary) class 를 빌드하세요. Dict은 아래와 같은 methods 를 갖고있어야 합니다.

add: 단어를 추가함.
get: 단어의 정의를 리턴함.
delete: 단어를 삭제함.
update: 단어를 업데이트 함.
showAll: dictionary 의 단어를 모두 프린트함.
count: dict 단어들의 총 count 를 리턴함.


*/


type Words = {
    [key: string]: string
}

class Dict {
    private words: Words

    // 비어있는 값으로 만들어 주고 싶으니까 직접 생성자를 쓴다
    constructor() {
        this.words = {}
    }

    // isExsits: 단어 존재 유무 체크 
    private isExsists(term: string): boolean {
        if (this.words[term] === undefined) return false;
        else return true;
    }

    // add: 단어를 추가함.
    add(word: Word) {
        if (!this.isExsists(word.term)) {
            this.words[word.term] = word.def;
        }
    }

    // get: 단어의 정의를 리턴함.
    get(term: string) {
        return this.words[term];
    }

    // delete: 단어를 삭제함.
    delete(term: string): string {
        if (!this.isExsists(term)) return "there is no any type of term what you input";
        else {
            delete this.words[term];
            return `${term} is deleted well`
        }
    }

    // update: 단어 자체를 update 시킴
    update(beforeWord: Word, afterWord: Word): string {
        if (!this.isExsists(beforeWord.term)) return "there is no any type of term what you input";
        else {
            this.add(afterWord);
            this.delete(beforeWord.term);
            return `${beforeWord.term} is updated by ${afterWord.term} well`;
        }
    }

    // showAll: dictionary 의 단어를 모두 프린트함.
    showAll(): void {
        for (const [key, value] of Object.entries(this.words)) {
            console.log(`${key}: ${value}`);
        }
    }

    // count: dict 단어들의 총 count 를 리턴함.
    count(): number {
        return Object.keys(this.words).length;
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}


const dict = new Dict();

const kimchi = new Word("kimchi", "한국의 전통 음식");

// test add and delete with showAll
console.log("test add and delete with showAll");
dict.add(kimchi);
dict.showAll();
console.log(dict.delete("kimchi"));
dict.showAll();
console.log(dict.delete("kimchi")); // 한 번 더 삭제 시도, 에러 체크
console.log("================================");

// test add, update and count with showAll
console.log("test add, update and count with showAll");
dict.add(kimchi);
const bibimbap = new Word("bibimbap", "The most common bibimbap consists of warm rice topped with mixed vegetables, beef or chicken, and raw egg, as well as soy sauce and a dollop of chilli pepper paste for seasoning. Ideal for seafood lovers, there’s a variation of this Korean mixed rice dish called hoedeopbap, which replaces meat with raw seafood such as salmon, tuna, or octopus.")
dict.add(bibimbap);
const tteokbokki = new Word("tteokbokki", "Korean street food that’s made with thick slices of garaetteok (boiled rice cake), fish cake, onions, diced garlic, salt, sugar and assorted vegetables that are stir-fried in sweet red chili sauce")
dict.add(tteokbokki);

dict.showAll();
console.log(`counts of dict: ${dict.count()}`);

const bulgogi = new Word("bulgogi", "Bulgogi consists of thin slices of marinated beef sirloin that are cooked alongside sliced onions, green peppers, and garlic using a charcoal burner, resulting in a distinctive smoky flavour")
dict.update(kimchi, bulgogi);
dict.showAll();
console.log(`counts of dict: ${dict.count()}`);