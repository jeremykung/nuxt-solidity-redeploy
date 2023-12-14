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

      <!-- <w3m-account-button v-if="web3Store.account" />
      <UButton
        v-if="!web3Store.account"
        @click="WalletConnect.connect()"
        color="primary"
        variant="outline"
        >Wallet Connect</UButton
      > -->
      <!-- <w3m-button /> -->
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
  <div class="my-8">{{ connectError }}</div>
  <div class="my-8">{{ connectError }}</div>
</template>

<script setup>
// Wallet Connect Composable
import WalletConnectComposable from "@/composables/useWeb3Modal";
const WalletConnect = WalletConnectComposable();

// Vanilla Setup
const web3Store = useWeb3Store();
const connectError = ref(null);
const connectErrorMessage = ref(null);

// Vanilla Connect Wallet
async function connectWallet() {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to MetaMask.");
      } else {
        console.error("error", err);
        connectError.value = "Error Connecting Account";
        connectErrorMessage.value = err;
      }
    });
  console.log("account connected:", accounts);
  await web3Store.setAccount(accounts[0]);
  console.log("set global account as:", web3Store.account);
}

// Dark Mode
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
