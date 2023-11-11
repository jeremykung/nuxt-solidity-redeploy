<template>
  <div>
    <h1 class="text-left text-2xl">Create Post</h1>
    <p class="text-slate-400 italic">Account: {{ web3Store.account }}</p>
    <UInput
      v-model="blogTitle"
      color="primary"
      variant="outline"
      placeholder="Post Title..."
      class="my-4"
    />
    <UTextarea
      v-model="blogContent"
      color="primary"
      variant="outline"
      placeholder="Post Content..."
      class="mb-4"
    />
    <UButton @click="createPost" block>Button</UButton>

    <UCard v-if="blogTitle" class="my-8">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="">{{ blogTitle }}</h2>
          <p class="text-xs font-thin italic text-right">Post Preview</p>
        </div>
      </template>

      <p class="font-thin text-sm">{{ blogContent }}</p>

      <template #footer>
        <p class="text-sm font-thin italic">{{ web3Store.account }}</p>
      </template>
    </UCard>
  </div>
</template>

<script setup>
const blogTitle = ref("")
const blogContent = ref("")
const web3Store = useWeb3Store()

async function createPost() {
  console.log("address for post:", web3Store.account)
  // console.log("contract instance:", web3Store.blogContract)
  // console.log("contract methods:", web3Store.blogContract.methods)
  // console.log(
  //   "contract createPost method:",
  //   web3Store.blogContract.methods.createPost
  // )

  await web3Store.blogContract.methods
    .createPost(blogTitle.value, blogContent.value)
    .send({ from: web3Store.account })
}
</script>

<!-- Testing out on-chain smart contract deployment and integration into Nuxt 3. Connect your account (top right), then try creating a post here! -->
