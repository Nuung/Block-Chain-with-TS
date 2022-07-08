/*
    hash는 그 node(block)을 유일하게 해주는 값
    prevHash 와 같이 링크드 리스트 형태로 이어짐
    특정 값을 hashing하면 항상 동일한 암호화 된 값이 나온다
    이를 활용, 값이 바뀌면 hash된 값은 다른 값, 유일한 데이터의 표시
    
*/

import crypto from "crypto"; // ts가 타입을 알 수 있게 .d.ts 파일 필요하다!! 어쩌지?
// yarn add -D @types/node 를 통해 가능하다
// https://github.com/DefinitelyTyped/DefinitelyTyped 레포가 레전드!

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class BlockChain {
    private blocks: Block[]
    constructor() {
        this.blocks = [];
    }

    private getPrevHash() {
        if (this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length - 1].hash;
    }

    public addBlock(data: string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }

    public getBlocks() {
        // this.blocks을 접근하게 해줄 수 있게 하면 안된다
        // 변수의 주소를 주는게 아니라 새로 array를 만들어서 리턴하면
        // call by value가 된다. 
        return [...this.blocks];
    }
}

const log = console.log;

const blockchain = new BlockChain();

blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("4 one");

blockchain.getBlocks().push(new Block("don't know", 2131332131, "this is hacking"));

log(blockchain.getBlocks());