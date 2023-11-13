<template>
  <UContainer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>

<script setup>
import Web3 from "web3"
// import contractABI from "/abis/abi.json"
import blogContractABI from "/abis/blogAbi.json"

const web3Store = useWeb3Store()

onMounted(async () => {
  // Connect web3 Provider
  if (process.client && window.ethereum) {
    const web3 = await new Web3(window.ethereum)
    await web3Store.setWeb3Instance(web3)
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
