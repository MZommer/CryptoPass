import { ethers } from "ethers";
import EVT_ABI from "./ABI/EVT.json";

export default class ETHHelper {
    constructor(web3) {
        this._web3 = web3
        this._etherProvider = new ethers.providers.Web3Provider(this._web3.currentProvider);
    }

    async balance(wallet) {
        return (await this._web3.eth.getBalance(wallet)) / (10 ** 18)
    }
    
    async getBlockNumber() {
        return await this._web3.eth.getBlockNumber()
    }

    async generatePass(){
        const blockNumber = await this.getBlockNumber();
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
        return signerAdress === adress;
    }

    async getEvent(address) {
        const EVT = new ethers.Contract(address, EVT_ABI, this._etherProvider);
        const keys = ["Title", "Description", "Location", "Date", "ReleaseDate", "IsActive", "IsPublic", "TicketAmount", "TicketTypes", "Genres", "Tags", "MinAge", "mintedTickets"];
        const values = Promise.all(keys.map(key => EVT[key]()));
        const event = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));

        return event;
    }

}