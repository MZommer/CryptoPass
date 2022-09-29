import { ethers } from "ethers";
import EVT_ABI from "./ABI/EVT.json";

export default class ETHHelper {
    constructor(web3) {
        this._web3 = web3
        this._etherProvider = new ethers.providers.Web3Provider(this._web3.currentProvider);
    }

    async getAddress(){
        const signer = this._etherProvider.getSigner();
        return signer.getAddress();
    }

    async balance(wallet) {
        return (await this._web3.eth.getBalance(wallet)) / (10 ** 18)
    }
    
    async getBlockNumber() {
        return await this._web3.eth.getBlockNumber()
    }

    async generatePass(tokenId){
        const signer = this._etherProvider.getSigner();
        const signature = await signer.signMessage(tokenId);
        const address = await signer.getAddress();
        const pass = btoa(`${signature};${address};${tokenId}`);
        return `CPT ${pass}`;  // Crypto Pass Token
    }

    async valdatePass(pass, address){
        if (!pass.startsWith("CPT"))
            return false;
        const [signature, address, tokenId] = atob(pass.split(" ")[1]).split(";");
        const signerAdress = await ethers.utils.verifyMessage(tokenId, signature);
        const EVT = new ethers.Contract(address, EVT_ABI, this._etherProvider);
        const owner = await EVT.ownerOf(tokenId);
        return signerAdress === owner;
    }
 
    async getEvent(address) {
        const EVT = new ethers.Contract(address, EVT_ABI, this._etherProvider);
        const keys = ["Title", "Description", "Location", "Date", "ReleaseDate", "IsActive", "IsPublic", "TicketAmount", "MinAge", "mintedTickets"];
        const values = Promise.all(keys.map(key => EVT[key]()));
        const event = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
        event.address = address;
        return event;
    }

    async createEvent(address) {
        const EVT = new ethers.Contract(address, EVT_ABI, this._etherProvider);
        // 
    }

    async buyTickets(eventAddress, amount){
        const EVT =  new ethers.Contract(eventAddress, EVT_ABI, this._etherProvider);
        return EVT.mint(await EVT.getActiveSaleId(), await this.getAddress(), amount);
    }
}