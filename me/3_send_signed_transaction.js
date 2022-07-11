const { ethers } = require("ethers");

const inforaId = '3bd80b758a304225a2b14448084bcdc5'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${inforaId}`)

const account1 = '0x838ce60e767E6227CD09F1A8d7B4C78f7A9f9882' // sender
const account2 = '0xFC9D93Bdfef4448819D588b2346526de4Be628c7' // recipient

const privateKey1 = '5c75e0b7c9507f8abcbb4bfb3771d4b32b0631defe47196d021e7187ba32a705' // Private key of account 1
// const privateKey2 = 'f7460ecf4e60014f2b91381cef84d9edeeb5083b56da2d00e967a2677d3e10eb' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
 
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.84")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)

}

main()