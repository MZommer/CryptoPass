import { ethers } from "ethers";

export default class ETHHelper {
    constructor(web3) {
        this._web3 = web3
        this._etherProvider = new ethers.providers.Web3Provider(this._web3.currentProvider);
    }

    async balance(wallet) {
        return (await this._web3.eth.getBalance(wallet)) / (10 ** 18)
    }

    async generatePass(){
        const blockNumber = await this._web3.eth.getBlockNumber()
        const signer = this._etherProvider.getSigner();
        const signature = await signer.signMessage(blockNumber.toString());
        const address = await signer.getAddress();
        const pass = btoa(`${signature};${address}`);
        return pass;
    }

    async valdatePass(pass){
        const blockNumber = this._web3.eth.getBlockNumber()
        const [signature, adress] = atob(pass).split(";");
        const signerAdress = await ethers.utils.verifyMessage(blockNumber, signature);
        return signerAdress == adress;
    }

}