const hre = require("hardhat");

async function main() {
    const Tutoring = await hre.ethers.getContractFactory("Tutoring");
    const tutoring = await Tutoring.deploy();
    await tutoring.waitForDeployment();

    console.log("Tutoring Contract deployed to:", tutoring.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
