<template>
  <div>
    <h1 class="text-left text-2xl">Create Post</h1>
    <p class="font-light mt-2 text-slate-400 italic">
      Account: {{ web3Store.account }}
      <!-- <w3m-account-button /> -->
    </p>
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
    <UButton v-if="confirmingPost" variant="ghost" loading block
      >Posting...</UButton
    >
    <UButton v-if="!confirmingPost" @click="createPost" block
      >Create Post</UButton
    >

    <UDivider
      v-if="blogTitle"
      class="mt-8"
      label="Preview"
      :ui="{ label: 'font-light text-gray-400 dark:text-gray-400' }"
    />
    <UCard v-if="blogTitle" class="my-8">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="">{{ blogTitle }}</h2>
          <!-- <p class="text-xs font-thin italic text-right">Post Preview</p> -->
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
const blogTitle = ref("");
const blogContent = ref("");
const confirmingPost = ref(false);
const web3Store = useWeb3Store();

async function createPost() {
  console.log("creating post for address:", web3Store.account);
  confirmingPost.value = true;

  try {
    const createPostResponse = await web3Store.blogContract.methods
      .createPost(blogTitle.value, blogContent.value)
      .send({ from: web3Store.account });

    console.log("create post res:", createPostResponse);
  } catch (error) {
    console.log("error posting:", error);
  }

  confirmingPost.value = false;
}
</script>

<!-- Testing out on-chain smart contract deployment and integration into Nuxt 3. Connect your account (top right), then try creating a post here! -->
