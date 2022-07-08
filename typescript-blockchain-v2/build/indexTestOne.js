import { init, exit } from "myPackage";
const hello = () => "hi";
class Block {
    constructor(data) {
        this.data = data;
    }
}
Block.hello = () => { return "hi"; };
init({
    urls: "test interface - urls"
});
exit(3);
