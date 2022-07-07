
// d.ts파일은 ts에게 이것이 어떤건지 설명을 하는 것이다! -> 구현하는 곳이 아님

interface Config {
    urls: string
}


declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}