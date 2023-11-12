<template>
  <!-- Quick Start -->
  <div class="mb-8">
    <h1 class="text-2xl mb-2">Quick Start Guide</h1>
    <div class="font-thin text-gray-400">
      <p>1. Install Metamask & switch to Sepolia Test Network</p>
      <p>
        2. Get some test
        <a
          class="text-primary"
          target="_blank"
          href="https://sepoliafaucet.com/"
          >Sepolia Eth</a
        >
      </p>
      <p>3. Create a new post that will live on-chain</p>
    </div>
  </div>

  <!-- Posts -->
  <div class="md:flex md:flex-row w-full md:justify-between flex-col">
    <CreatePostForm class="md:w-2/5 w-full" />
    <DisplayPosts class="md:w-2/5 md:mt-0 mt-8" />
  </div>
</template>
