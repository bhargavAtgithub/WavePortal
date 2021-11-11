# WavePortal
 A Dapp that allows any one to know about me and wave at me.

Contract Address - 0xb120930E6A283daEe264Be0D2c38F3fB33cB6A25
https://rinkeby.etherscan.io/address/0xb120930E6A283daEe264Be0D2c38F3fB33cB6A25

A smart contract that allows you to send a message. 
And few users will receive 0.001 eth, who are treated as winners. It is a random choice. Getting a random value in smart contracts is a difficult problem. 

On the blockchain, there is nearly no source of randomness. Everything the contract sees, the public sees. Because of that, someone could game the system by just looking at the smart contract, seeing what #'s it relies on for randomness, and then the person could give it the exact numbers they need to win.

In this smart contract we are using difficulty and timestamp of the block to combine and create a random number. Technically, both difficulty and timestamp could be controlled by a sophisticated attacker. So just to make this harder, a new variable called seed is added into the equation. The seed value will change everytime a user sends a wave.  
