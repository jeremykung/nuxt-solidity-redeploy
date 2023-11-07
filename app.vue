<template>
  <UContainer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>

<script setup>
import contractABI from "/abis/abi.json"
console.log("abi:", contractABI)

const contractAddress = "0x2f7C319eDf93364976E548E659f3400d5A511Ff0"
</script>
