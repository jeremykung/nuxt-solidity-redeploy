<template>
  <UContainer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>

<script setup>
// Vanilla Imports
import Web3 from "web3";
import blogContractABI from "/abis/blogAbi.json";
import detectEthereumProvider from "@metamask/detect-provider";

// Wallet Connect
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/vue";

// Vanilla Setup
const runtimeConfig = useRuntimeConfig(); // dotenv setup via nuxt.config
const web3Store = useWeb3Store();

// Wallet Connect
// 1. Get projectId
const projectId = runtimeConfig.public.PROJECT_ID;

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create modal
const metadata = {
  name: "Nuxt x Solidity",
  description:
    "Project integrating custom Solidity smart contracts with Nuxt.js frontend",
  url: "https://nuxt-solidity-jeremykung.vercel.app/",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
});

onMounted(async () => {
  // Connect web3 Provider
  if (process.client && window.ethereum) {
    try {
      // Detect User Network

      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      console.log("chainId", chainId);

      window.ethereum.on("chainChanged", handleChainChanged);

      function handleChainChanged(chainId) {
        // We recommend reloading the page, unless you must do otherwise.
        window.location.reload();
      }

      // Create web3 Instance
      const web3 = await new Web3(window.ethereum);
      await web3Store.setWeb3Instance(web3);
      console.log("web3:", web3Store.web3);

      // Link contract ABI
      let blogContract = await new web3Store.web3.eth.Contract(
        blogContractABI,
        web3Store.blogContractAddress
      );
      await web3Store.setBlogContract(blogContract);

      console.log("blog contract:", web3Store.blogContract);
    } catch (error) {
      console.log("error finding window.ethereum:", error);
    }
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
});

// console.log("abi:", contractABI)
</script>
