<template>
  <div>
    <h1 class="text-left text-2xl">Create Post</h1>
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
    />
    <p v-if="blogTitle">{{ blogTitle }}: {{ blogContent }}</p>
  </div>
</template>

<script setup>
const blogTitle = ref("")
const blogContent = ref("")
</script>
