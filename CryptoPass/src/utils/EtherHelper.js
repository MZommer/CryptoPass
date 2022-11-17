import { ethers } from "ethers";
import EVT_ABI from "./ABI/Event.json";

export default class EtherHelper {

    constructor (web3Provider) {
        this.etherProvider = new ethers.providers.Web3Provider(web3Provider);
    }
    async getAddress(){
        const signer = this.etherProvider.getSigner();
        return signer.getAddress();
    }
    

    async getEventInfo(eventAddress) {
        const EVT = new ethers.Contract(eventAddress, EVT_ABI, this.etherProvider);
        const eventInfo = await EVT.eventInfo();
        return eventInfo;
    }

    async getSaleInfo(eventAddress) {
        const EVT = new ethers.Contract(eventAddress, EVT_ABI, this.etherProvider);
        try {
            const saleId = await EVT.getActiveSaleId()
            const salePrice = await EVT.getSalePrice(saleId);
            console.log(saleId, salePrice)
            return {saleId, salePrice}
        }
        catch (err) {
            console.error(err);
            return null;
        }

    }

    async getAddressTokens(eventAddress) {
        const EVT = new ethers.Contract(eventAddress, EVT_ABI, this.etherProvider);
        const tokens = EVT.getAddressTokens(await this.getAddress());
        return tokens;

    }
    async buyTickets(eventAddress, amount, saleId) {
        const EVT = new ethers.Contract(eventAddress, EVT_ABI, this.etherProvider.getSigner(), {value: 2000*amount});
        return await EVT.mint(saleId, await this.getAddress(), amount); // missing the sending of the money for the ticket
    }



    async generatePass(contractAddress, tokenId){
        const signer = this.etherProvider.getSigner();
        const signature = await signer.signMessage(tokenId);
        const address = await signer.getAddress();
        const pass = btoa(`${signature};${address};${tokenId};${contractAddress}`);
        return `CPT ${pass}`;  // Crypto Pass Token
    }

    async valdatePass(pass){
        if (!pass.startsWith("CPT"))
            return false;
        const [signature, address, tokenId, contractAddress] = atob(pass.split(" ")[1]).split(";");
        const signerAdress = await ethers.utils.verifyMessage(tokenId, signature);
        const EVT = new ethers.Contract(contractAddress, EVT_ABI, this.etherProvider);
        // TODOO: Make validation
        const owner = await EVT.ownerOf(tokenId);
        return signerAdress === owner;
    }
}