<template>
  <nav class="container py-4 mb-6 flex justify-between items-center">
    <div class="text-xl text-slate-500">Nuxt x Solidity</div>
    <div class="flex items-center gap-2">
      <UButton color="gray" variant="solid">Connect</UButton>
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
