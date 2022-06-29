
# why not javascript

> type이 없어서 유연하고 자유로웠던 js, <br/>
> 초반에 이렇게 까지 커질 것이라 생각하지않고 개판으로, 스크립트언어로써 유연하게 설계됨 <br/>
> 하지만 확장함에 따라 tpye이 필요해짐! <br/>

## 연산 에러 지 마음대로

```javascript
[1, 2, 3, 4, 5] + false = ?
=> '1','2','3','4','5'+false 게다가 string
```

## 파라미터 맘대로 처리, 유명한 Devide Zero

```javascript
divide(2, 3);
=> 0.6666666666666666

divide(2, "3");
=> 0.6666666666666666
=> wtf? 문자열을 왜 자기 마음대로 casting 하니?

divide("xxxxx");
=> NaN 
=> wtf? error 가 나고 stop해야지! 타입도 정해져 있지 않으니 몰라!


divide(1, 0);
=> Infinity
=> wtf?
```

## 최소한의 에러로 디버깅 힘드러

```javascript

const hyeon = { name: "hyeonwoo" };
hyeon.hello();
=> Uncaught TypeError: hyeon.hello is not a function at <anonymous>:2:7
=> 더 정확하게 설명해줘요

```

## 런타임 에러를, 컴파일 타임에 잡하보자!

- 에러 미연에 방지하고, type을 추가하고, 좀 더 엄격하게, 혼동없이 써보자!
- 런타임에 터지면 문제가 더욱 커질 수 있다!