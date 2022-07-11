const { ethers } = require("ethers");

const inforaId = '3bd80b758a304225a2b14448084bcdc5'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${inforaId}`)

const account1 = '0x838ce60e767E6227CD09F1A8d7B4C78f7A9f9882' // sender
const account2 = '0xFC9D93Bdfef4448819D588b2346526de4Be628c7' // recipient

const privateKey1 = '5c75e0b7c9507f8abcbb4bfb3771d4b32b0631defe47196d021e7187ba32a705' // Private key of account 1
// const privateKey2 = 'f7460ecf4e60014f2b91381cef84d9edeeb5083b56da2d00e967a2677d3e10eb' // Private key of account 2
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
    "function decimals() view returns (uint8)"
];

const address = '0xD8AFa55703A442a127761E5CA897e060Cb3dcb2b'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const decimals = await contract.decimals()

    const tx = await contractWithWallet.transfer(account2, 5 * 10 ** decimals)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()