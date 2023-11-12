<template>
  <div>
    <h1 class="text-2xl mb-8">Posts</h1>
    <p v-if="!web3Store.account" class="font-thin italic text-slate-400">
      Please connect wallet to see your posts
    </p>
    <!-- <p v-if="web3Store.account && !posts">
      {{ postHelpMessage }}
    </p> -->

    <!-- Conditionally render. If no posts, show something else -->
    <p
      v-if="posts && posts.length === 0"
      class="font-thin italic text-slate-400"
    >
      Create your first post on the left
    </p>
    <UCard v-if="web3Store.account && !posts" class="mb-8">
      <template #header>
        <USkeleton class="h-4 w-[150px]" />
      </template>
      <USkeleton class="h-4 w-[250px] mb-4" />
      <USkeleton class="h-4 w-[200px]" />
    </UCard>

    <UCard v-for="post in posts" class="mb-8">
      <template #header>
        <h2 class="">{{ post.title }}</h2>
      </template>

      <p class="font-thin text-sm">{{ post.content }}</p>

      <template #footer>
        <p class="text-sm font-thin italic">{{ post.author }}</p>
      </template>
    </UCard>
    <!--  -->
  </div>
</template>

<script setup>
const web3Store = useWeb3Store()

const posts = ref(null)
const postHelpMessage = ref("Create your first post on the left")

setInterval(displayPosts, 2000)

async function displayPosts() {
  //   console.log(
  //     "blogContract for loading posts:",
  //     web3Store.blogContract.methods.getAllPosts
  //   )
  if (web3Store.account) {
    // console.log("getting posts for account:", web3Store.account)
    let getAllPostsResponse = await web3Store.blogContract.methods
      .getAllPosts(web3Store.account)
      .call()
    // console.log("raw post data:", getAllPostsResponse)
    // remove BigInt and conver to Number for Vue Refs to work with them
    getAllPostsResponse = getAllPostsResponse.map((post) => {
      post[0] = Number(post[0])
      post[4] = Number(post[4])
      post[5] = Number(post[5])
      post.timestamp = Number(post.timestamp)
      post.id = Number(post.id)
      post.likes = Number(post.likes)
      return post
    })
    posts.value = getAllPostsResponse

    if (posts.value.length > 0) {
      //   console.log("posts exist:", posts.value)
      postHelpMessage.value = "Loading Posts..."
    }
    // console.log("fixed post data:", posts.value)
  } else {
    // console.log("account not connected")
  }
}

onMounted(async () => {
  displayPosts()
})
</script>
