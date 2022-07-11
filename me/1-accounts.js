// const { ethers } = require("ethers")

const inforaId = '3bd80b758a304225a2b14448084bcdc5'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${inforaId}`)

const addres = '0xF0335E130Aa4ab3e59e1a9162cfA135DC869B62E'

const majid = async ()=> {
    const balance = await provider.getBalance(addres)
      app.innerHTML+= `
      <p> Ether balance: ${addres} --> ${ethers.utils.formatEther(balance)}ETH</p>
      `
      console.log(`Ether balance: ${addres}  /br  ${ethers.utils.formatEther(balance)}ETH`);

    }
  majid()