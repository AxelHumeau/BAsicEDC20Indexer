import { ethers } from "ethers";
import dotenv from 'dotenv'

dotenv.config();

async function main() {
  console.log("🚀 ERC20 Indexer démarré");

  // Exemple : connexion à un provider
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

  const blockNumber = await provider.getBlockNumber();
  console.log("Block actuel:", blockNumber);
}

main().catch(console.error);
