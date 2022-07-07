
// 그럼 실제 js 파일을 ts에서 쓰려면 어떻게 해야할까? tsconfig - "allowJs": true
// Q) Can we use Typescript and Javascript in the same project?
// A) YES (with option allowJs scope in tsconfig)

import { init, exit } from "./myPackageTwo";

init({
    debug: true,
    url: "jsdocs test"
});
exit(3);