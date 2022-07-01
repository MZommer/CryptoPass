import { ethers } from "ethers";

const BLOCK_DELAY = 15000;

export default class ETHHelper {
    constructor(web3) {
        this._web3 = web3
        this._etherProvider = new ethers.providers.Web3Provider(this._web3.currentProvider);
    }

    async balance(wallet) {
        return (await this._web3.eth.getBalance(wallet)) / (10 ** 18)
    }
    async getNextBlockOffset() {
        const blockNumber = await this._web3.eth.getBlockNumber();
        const block = await this._web3.eth.getBlock(blockNumber);
        return Date.now() - block.timestamp - BLOCK_DELAY;
    }

    async generatePass(){
        const blockNumber = await this._web3.eth.getBlockNumber()
        const signer = this._etherProvider.getSigner();
        const signature = await signer.signMessage(blockNumber.toString());
        const address = await signer.getAddress();
        const pass = btoa(`${signature};${address}`);
        return `CPT ${pass}`;  // Crypto Pass Token
    }

    async valdatePass(pass){
        if (!pass.startsWith("CPT"))
            return false;
        const blockNumber = this._web3.eth.getBlockNumber()
        const [signature, adress] = atob(pass.split(" ")[1]).split(";");
        const signerAdress = await ethers.utils.verifyMessage(blockNumber, signature);
        return signerAdress == adress;
    }

}