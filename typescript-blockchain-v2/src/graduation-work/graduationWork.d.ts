declare module "lodash" {
    function head<T>(arr: T[]): T | undefined
    function hasIn(object: Object, key: string): boolean
    function isBoolean<T>(object: T): boolean
    function toString<T>(objet: T): string

    // split
    type SeparatorType = RegExp | string;
    function split(str: [string], separator: SeparatorType, limit: [number]): [string]

    // hasPath
    type PathType = [string] | string;
    function hasPath<T>(object: T, path: PathType): boolean

    function filter<T>(arr: T[], predicate: Function): T[]
    function every<T>(arr: T[], predicate: Function): boolean
    function map<T>(arr: T[], predicate: Function): T[]
}