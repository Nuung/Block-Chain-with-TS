// import * as CrytoJS from "crypto-js";

// class Block {
//     // static method라 block obejct를 거치지 않고 바로 사용 가능 
//     static calculateBlockHash = (
//         index: number, 
//         previousHash: string, 
//         timestamp: number,
//         data: string
//     ): string => 
//     CrytoJS.SHA256(index + previousHash + timestamp + data).toString();

//     // 유요한 구조인지 아닌지 체크 
//     static validateStructure = (aBlock: Block): boolean => 
//         typeof aBlock.index === "number" && 
//         typeof aBlock.hash === "string" && 
//         typeof aBlock.previousHash === "string" && 
//         typeof aBlock.timestamp === "number" &&
//         typeof aBlock.data === "string";

//     // member 
//     public index: number;
//     public hash: string;
//     public previousHash: string;
//     public data: string;
//     public timestamp: number;

//     constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
//         this.index = index;
//         this.hash = hash;
//         this.previousHash = previousHash;
//         this.data = data;
//         this.timestamp = timestamp;
//     }
// }

// const genesisBlock: Block = new Block(0, "234524656453", "", "HELLOW", 123456);

// // block의 체이닝 연결이 결국 block chain -> block의 object를 [array] 형태로 
// let blockChain: Block[] = [genesisBlock];
// // console.log(blockChain);
// // blockChain.push("SOMETHING"); // ts에서는 작동을 안한다! 당연히 허용된 push object가 아니니까!! 


// /* Create New method for block / return 값 명시가 무엇인지 생각하면서 보자  */
// const getBlockChain = (): Block[] => blockChain;

// const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

// const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// const createNewBlock = (data: string): Block => {
//     const previousBlock: Block = getLatestBlock();
//     const newIndex: number = previousBlock.index + 1;
//     const newTimestamp: number = getNewTimeStamp();
//     const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
//     const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
//     addBlock(newBlock);
//     return newBlock;
// };

// const getHashforBlock = (aBlock: Block): string => 
//     Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

// // 유효한 블럭인지 아닌지 체크하는 메서드 
// const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
//     if(Block.validateStructure(candidateBlock)) return false;
//     else if(previousBlock.index + 1 !== candidateBlock.index) return false;
//     else if(previousBlock.hash !== candidateBlock.previousHash) return false;
//     else if(getHashforBlock(candidateBlock) !== candidateBlock.hash ) return false;
//     else return true;
// }

// // index를 잘보면 둘 다 1이다 왜? 새로운 블럭 영역을 각각 만들었으니까 
// // console.log(createNewBlock("Hello"), createNewBlock("Bye"));

// const addBlock = (candidateBlock: Block): void => {
//     // 유효성, 체이닝 가능한 것들만 blockChain array에 add할 것 이다 
//     if(isBlockValid(candidateBlock, getLatestBlock())){
//         blockChain.push(candidateBlock);
//     }
//     else {
//         console.log("Error");
//     }
// }

// //////////////////////////////////////////////////////////

// for (let i = 1; i <= 3; i++) {
//     createNewBlock(i + "th Block Created");
// }

// createNewBlock("second block");
// createNewBlock("third block");
// createNewBlock("fourth block");

// console.log(blockChain);

// export {};

import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

for (let i = 0; i <= 3; i++) createNewBlock(i + 1 + "th block");    
console.log(blockchain);

export {};