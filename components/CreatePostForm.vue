<template>
  <div>
    <h1 class="text-left text-2xl">Create Post</h1>
    <p class="text-slate-400 italic">Account: {{ web3Store.account }}</p>
    <UInput
      v-model="blogTitle"
      color="primary"
      variant="outline"
      placeholder="Blog Title..."
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

    <p v-if="blogTitle">{{ blogTitle }}: {{ blogContent }}</p>
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
