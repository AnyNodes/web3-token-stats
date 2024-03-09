const ethers = require('ethers');

// ETH RPC
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/890237adf35f4bf790bc8fbaac27fa0f');

// ERC-20 token ABI with only the functions we need
const tokenAbi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)"
];

// function to get token info
async function getTokenInfo(tokenAddress) {
    const contract = new ethers.Contract(tokenAddress, tokenAbi, provider);
    
    // read token info
    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    
    console.log(`Name: ${name}`);
    console.log(`Symbol: ${symbol}`);
    console.log(`Decimals: ${decimals}`);
}

// how to use：pass token address to the function
const tokenAddress = '0x7bc703a48c90da793f57b55808ae14cdd75458d6';
getTokenInfo(tokenAddress).catch(console.error);
