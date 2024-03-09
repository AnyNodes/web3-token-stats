const ethersPackage = require('ethers');
console.log(ethersPackage); // Check what's actually imported

const { ethers } = ethersPackage; // Destructure `ethers` if it's a property of the imported object
console.log(ethers); // Verify `ethers` object

// If the above step prints undefined, try accessing providers directly:
const providers = ethersPackage.providers;
console.log('providers is: ', providers); // Verify providers

// If `providers` is defined, then attempt to access JsonRpcProvider
if (providers) {
  console.log('JsonRpcProvider is: ', providers.JsonRpcProvider); // Verify JsonRpcProvider
}
