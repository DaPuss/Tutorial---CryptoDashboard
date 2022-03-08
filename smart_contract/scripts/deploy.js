const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}


const runMain = async () => {
  try{
      await main();
      process.exit(0);
    }catch(error){
      console.error(error);
      process.exit(1);
  }
}