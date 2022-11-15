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

    async buyTickets(eventAddress, amount) {
        const EVT = new ethers.Contract(eventAddress, EVT_ABI, this.etherProvider.getSigner(), {value: 2000*amount});
        return await EVT.mint(await EVT.getActiveSaleId(), await this.getAddress(), amount); // missing the sending of the money for the ticket
    }

}