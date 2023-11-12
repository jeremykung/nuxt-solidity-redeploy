<template>
  <nav class="py-4 flex justify-between items-center">
    <NuxtLink to="/">
      <div class="text-xl text-gray-500">Nuxt x Solidity</div>
    </NuxtLink>
    <div class="flex items-center gap-2">
      <NuxtLink v-if="!onHomepage" to="/">
        <UButton color="white" variant="solid">Home</UButton>
      </NuxtLink>
      <NuxtLink to="/about">
        <UButton color="white" variant="solid">About</UButton>
      </NuxtLink>

      <UButton
        v-if="!web3Store.account"
        @click="connectWallet"
        color="primary"
        variant="outline"
        >Connect</UButton
      >
      <UButton
        v-if="web3Store.account"
        @click="connectWallet"
        color="primary"
        variant="ghost"
        >Connected</UButton
      >
      <ClientOnly>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
      </ClientOnly>
    </div>
  </nav>
  <UDivider
    label=""
    class="mb-8"
    :ui="{ border: { size: { horizontal: 'border-t-2' } } }"
  />
</template>

<script setup>
const web3Store = useWeb3Store()

// Connect Wallet
async function connectWallet() {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to MetaMask.")
      } else {
        console.error(err)
      }
    })
  console.log("account connected:", accounts)
  await web3Store.setAccount(accounts[0])
  console.log("set global account as:", web3Store.account)
}

// Dark Mode
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === "dark"
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
  },
})
</script>
