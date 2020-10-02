class Block {
    public index: Number;
    public hash: String;
    public previousHash: String;
    public data: String;
    public timestamp: Number;
    constructor(index: Number, hash: String, previousHash: String, data: String, timestamp: Number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "234524656453", "", "HELLOW", 123456);

// block의 체이닝 연결이 결국 block chain -> block의 object를 [array] 형태로 
let blockChain: [Block] = [genesisBlock];
console.log(blockChain);

// blockChain.push("SOMETHING"); // ts에서는 작동을 안한다! 당연히 허용된 push object가 아니니까!! 

export {};