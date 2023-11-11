<template>
  <nav class="container py-4 mb-6 flex justify-between items-center">
    <div class="text-xl text-slate-500">Nuxt x Solidity</div>
    <div class="flex items-center gap-2">
      <UButton @click="connectWallet" color="gray" variant="solid"
        >Connect</UButton
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
