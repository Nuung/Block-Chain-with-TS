
# Ploymorphism, 다형성!

## 앞서 나온 ts OOP 특성을 합치자

```typescript

// ss 로 이름이 특이한 이유는 이미 Storage가 js core에 의해 선언되어 있기 때문
interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string): T {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}


const stringsStorage = new LocalStorage<string>();
stringsStorage.get("test");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("test");

```