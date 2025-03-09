import { ethers } from 'ethers';
import ContractABI from './ContractABI.json';

const CONTRACT_ADDRESS = "0xcf4f8075ee7B8f128fF2BfdF3DcEA82de88DA6AB";

const CHAIN_ID = 656476;
const RPC_URL = "https://rpc.open-campus-codex.gelato.digital";

/**
 * Get a contract instance connected to the user's wallet
 * @returns {Promise<ethers.Contract>} The contract instance
 */
export const getContract = async () => {
    try {
        if (!window.ethereum) {
            alert("Please install MetaMask or another Ethereum wallet to use this application");
            return null;
        }

        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (parseInt(chainId, 16) !== CHAIN_ID) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: `0x${CHAIN_ID.toString(16)}` }]
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: `0x${CHAIN_ID.toString(16)}`,
                            chainName: 'Educhain',
                            nativeCurrency: { name: 'EDUCHAIN', symbol: 'EDU', decimals: 18 },
                            rpcUrls: [RPC_URL],
                            blockExplorerUrls: ['https://opencampus-codex.blockscout.com/']
                        }]
                    });
                } else {
                    throw switchError;
                }
            }
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ContractABI, signer);
        return contract;
    } catch (error) {
        console.error("Error getting contract:", error);
        throw error;
    }
};

/**
 * Format time from hundredths to a human-readable string
 * @param {number} timeInHundredths - Time in hundredths (e.g., 150 for 1.5)
 * @returns {string} Formatted time string
 */
export const formatTime = (timeInHundredths) => {
    const hours = Math.floor(timeInHundredths / 100);
    const minutes = (timeInHundredths % 100) * 0.6;

    if (hours > 0) {
        return `${hours}h ${minutes > 0 ? `${Math.round(minutes)}m` : ''}`;
    }
    return `${Math.round(minutes)}m`;
};

/**
 * Format price from hundredths to a decimal string with 2 decimal places
 * @param {number} priceInHundredths - Price in hundredths (e.g., 5075 for 50.75)
 * @returns {string} Formatted price string
 */
export const formatPrice = (priceInHundredths) => {
    return (priceInHundredths / 100).toFixed(2);
};
