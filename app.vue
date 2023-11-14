<template>
  <UContainer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>

<script setup>
import Web3 from "web3"
import blogContractABI from "/abis/blogAbi.json"

// This function detects most providers injected at window.ethereum.
import detectEthereumProvider from "@metamask/detect-provider"

const web3Store = useWeb3Store()

onMounted(async () => {
  // This returns the provider, or null if it wasn't detected.
  try {
    const provider = await detectEthereumProvider()
    console.log("provider:", provider)

    if (provider) {
      // From now on, this should always be true:
      // provider === window.ethereum
      startApp(provider) // initialize your app
    } else {
      console.log("Please install MetaMask!")
    }
  } catch (error) {
    console.log("error detecting provider:", error)
  }

  // Connect web3 Provider
  if (process.client && window.ethereum) {
    try {
      const web3 = await new Web3(window.ethereum)
      await web3Store.setWeb3Instance(web3)
    } catch (error) {
      console.log("error finding window.ethereum:", error)
    }
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    )
  }

  console.log("web3:", web3Store.web3)

  let blogContract = await new web3Store.web3.eth.Contract(
    blogContractABI,
    web3Store.blogContractAddress
  )
  await web3Store.setBlogContract(blogContract)

  console.log("blog contract:", web3Store.blogContract)
})
// console.log("abi:", contractABI)
</script>
