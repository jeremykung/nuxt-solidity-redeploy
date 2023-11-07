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
}

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
