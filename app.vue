<template>
  <UContainer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>

<script setup>
import Web3 from "web3"
import contractABI from "/abis/abi.json"

const contractAddress = "0x2f7C319eDf93364976E548E659f3400d5A511Ff0"
const web3 = ref(null)

onMounted(async () => {
  if (process.client && window.ethereum) {
    web3.value = new Web3(window.ethereum)
    console.log("web3:", web3.value)
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    )
  }
})
console.log("abi:", contractABI)
</script>
