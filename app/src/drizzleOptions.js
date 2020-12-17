import Web3 from "web3";
import Dice from "./contracts/Dice.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [Dice],
  events: {
    Dice: ['NewBetIsSet', 'GameResult'],
  },
};

export default options;
