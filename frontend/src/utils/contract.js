import { ethers } from "ethers";
import ContractABI from "./ContractABI.json";

const CONTRACT_ADDRESS = "0x6C4b713F4fECDf9bFFc6842E8D1feCCB395dAc71";

export const getContract = async () => {
    if (!window.ethereum) {
        alert("MetaMask not found! Please install it.");
        return null;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    return new ethers.Contract(CONTRACT_ADDRESS, ContractABI, signer);
};
