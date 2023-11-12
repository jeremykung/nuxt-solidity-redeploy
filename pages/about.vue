<template>
  <div class="sm:flex-row flex flex-col justify-around">
    <div class="sm:w-3/12 sm:text-right sm:mb-0 w-full text-left mb-8">
      <h1 class="text-2xl text-primary-400 mb-2">Technologies</h1>
      <ul class="font-light text-gray-400">
        <li>Nuxt 3</li>
        <li>Solidity</li>
        <li>Web3 API</li>
        <li>Typescript</li>
        <li>Tailwind</li>
      </ul>
    </div>

    <div class="sm:w-8/12 w-full">
      <h1 class="text-2xl text-primary-400 mb-2">About</h1>
      <p class="font-thin text-gray-400">
        Users can login using their wallet address and post directly to the
        blockchain. Whatever they post is immutable and lives there forever. You
        can only see your personal posts. Solidity mappings is a data structure
        that maps data specifically to your account. Therefore only you will be
        able to see your posts once your account is connected.
        <br /><br />
        This is a project for testing web3 technologies and with modern web
        frameworks. It works with the Ethereum Blockchain and reads/writes to it
        through an injected provider, such as Metamask. Built on Nuxt 3.8.1 and
        Solidity 0.8.18, deployed on Vercel.
      </p>
    </div>
  </div>
</template>
