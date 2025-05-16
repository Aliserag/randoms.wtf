import { ethers } from 'ethers';

// Interface for VRF provider configuration
export interface VRFProvider {
  id: string;
  name: string;
  description: string;
  chainName: string;
  logoUrl: string;
  contractAddress: string;
  rpcUrl: string;
  blockExplorerUrl: string;
  abi: any[];
}

// Default VRF Contract (current implementation)
const DEFAULT_VRF_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "min",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "max",
        "type": "uint64"
      }
    ],
    "name": "getRandomNumber",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "items",
        "type": "string[]"
      }
    ],
    "name": "selectRandomItem",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Aptos VRF Contract via Orao Network
const APTOS_VRF_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "min",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "max",
        "type": "uint64"
      }
    ],
    "name": "getRandomNumber",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "items",
        "type": "string[]"
      }
    ],
    "name": "selectRandomItem",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Bahamut Erinaceus VRF Oracle ABI
const BAHAMUT_VRF_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "min",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      }
    ],
    "name": "getRandomNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "items",
        "type": "string[]"
      }
    ],
    "name": "selectRandomItem",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Polkadot BABE VRF ABI
const POLKADOT_VRF_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "min",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      }
    ],
    "name": "getRandomNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "items",
        "type": "string[]"
      }
    ],
    "name": "selectRandomItem",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// List of all VRF providers
export const VRF_PROVIDERS: VRFProvider[] = [
  {
    id: 'default',
    name: 'Default Random',
    description: 'Native Verifiable Random Function for true on-chain randomness',
    chainName: 'Default Testnet',
    logoUrl: '/images/chains/default.svg',
    contractAddress: '0x91502a85Ad74ba94499145477dccA19b3E1D6124',
    rpcUrl: 'https://rpc.default-testnet.network',
    blockExplorerUrl: 'https://explorer.default-testnet.network',
    abi: DEFAULT_VRF_ABI
  },
  {
    id: 'aptos',
    name: 'Aptos VRF (Orao)',
    description: 'Orao Network\'s VRF SDK for the Aptos blockchain',
    chainName: 'Aptos Testnet',
    logoUrl: '/images/chains/aptos.svg',
    contractAddress: '0x2f74c24505a4bee5a943a9638b06c2efb9ee08fd23c8f4a9e7ef22d7e536e75a',
    rpcUrl: 'https://fullnode.testnet.aptoslabs.com/v1',
    blockExplorerUrl: 'https://explorer.aptoslabs.com/testnet',
    abi: APTOS_VRF_ABI
  },
  {
    id: 'bahamut',
    name: 'Bahamut Erinaceus VRF',
    description: 'Erinaceus decentralized oracle for the Bahamut blockchain',
    chainName: 'Bahamut Testnet',
    logoUrl: '/images/chains/bahamut.svg',
    contractAddress: '0x7af963cF6D228E564e2A0aA0DdBF06210B38615D',
    rpcUrl: 'https://testnet-rpc.bahamut.io',
    blockExplorerUrl: 'https://testnet-explorer.bahamut.io',
    abi: BAHAMUT_VRF_ABI
  },
  {
    id: 'polkadot',
    name: 'Polkadot BABE VRF',
    description: 'VRF used in Polkadot\'s BABE consensus mechanism',
    chainName: 'Polkadot',
    logoUrl: '/images/chains/polkadot.svg',
    contractAddress: '0x9Be40D8Ffb6EB3E1bD0DCa6eA28625341dF67C23',
    rpcUrl: 'https://rpc.polkadot.io',
    blockExplorerUrl: 'https://polkadot.subscan.io',
    abi: POLKADOT_VRF_ABI
  }
];

// Default provider
export const DEFAULT_VRF_PROVIDER = VRF_PROVIDERS[0]; 