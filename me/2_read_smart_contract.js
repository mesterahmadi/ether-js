// const { ethers } = require("ethers");

const inforaId = '3bd80b758a304225a2b14448084bcdc5'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${inforaId}`)


const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function balanceOf(address) view returns (uint)",
];
 
const address = '0xD8AFa55703A442a127761E5CA897e060Cb3dcb2b' // Petros Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
  const name = await contract.name()
  const symbol = await contract.symbol()
  const totalSupply = await contract.totalSupply()
  const decimals = await contract.decimals()
  const balance = await contract.balanceOf("0xe5719d580F3d98ba66b5df4B00436b15F0D934C2")

  app.innerHTML+= `
      <p> addres: ${address}</p>
      <p> name: ${name}</p>
      <p> symbol: ${symbol}</p>
      <p> totlasuply: ${totalSupply}</p>
      <p> balance: ${balance}</p>
      <p> decimals: ${decimals}</p>
      `

  console.log("addres:", address);
  console.log('name:', name);
  console.log('symbol:', symbol);
  console.log(`totalsuplay ${totalSupply}`);
  console.log(`balance ${balance}`);
  console.log(`decimals ${decimals}`);
  console.log(`${ethers.utils.formatEther(balance)}ETH`);

}

main()