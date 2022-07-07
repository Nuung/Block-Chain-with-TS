// https://huchu.link/3puVq0Q

type LastType = <T> (arr: T[]) => T;
type PrependType = <T> (arr: T[], item: T) => T[];

// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
const last: LastType = (arr) => {
    return arr[arr.length - 1];
};

// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
const prepend: PrependType = (arr, item) => {
    return [item, ...arr];
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["1", "2", "3"];
const arr3 = [true, false, true, false, true];
const arr4 = [1, "1", true, "false", "string", 888];

console.log("======================================================");

console.log(last(arr1));
console.log(last(arr2));
console.log(last(arr3));
console.log(last(arr4));

console.log("======================================================");

console.log(prepend(arr1, 6));
console.log(prepend(arr3, false));
console.log(prepend(arr4, "true"));
