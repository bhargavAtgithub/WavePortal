const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1'),
    });
    await waveContract.deployed();
    console.log('Contract addy:', waveContract.address);


    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
      );

    let wavecount;
    wavecount = await waveContract.getTotalWaves();
    
    let waveTxn = await waveContract.wave('A message!');
    await waveTxn.wait();
    
    const [_, randomPerson] = await hre.ethers.getSigners();
    let ReceiverBalance = await hre.ethers.provider.getBalance(randomPerson.address);
    console.log(
        'balance:',
        hre.ethers.utils.formatEther(ReceiverBalance)
    );
    waveTxn = await waveContract.connect(randomPerson).wave('Another message!');

    ReceiverBalance = await hre.ethers.provider.getBalance(randomPerson.address);
    console.log(
        'balance:',
        hre.ethers.utils.formatEther(ReceiverBalance)
    );

    waveTxn = await waveContract.connect(randomPerson).wave('Another message! 2');
    
    ReceiverBalance = await hre.ethers.provider.getBalance(randomPerson.address);
    console.log(
        'balance:',
        hre.ethers.utils.formatEther(ReceiverBalance)
    );

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );

}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(e) {
        console.log(e);
        process.exit(1);
    }
}

runMain();