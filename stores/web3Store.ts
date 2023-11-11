import { defineStore } from "pinia"
export const useWeb3Store = defineStore("web3", {
  state: () => ({
    count: 0,
    web3: null,
    account: null,
    blogContract: null,
    blogContractAddress: "0x2f7C319eDf93364976E548E659f3400d5A511Ff0",
  }),
  actions: {
    setAccount(account: null) {
      this.account = account
    },
    setWeb3Instance(web3: null) {
      this.web3 = web3
    },
    setBlogContract(blogContract: null) {
      this.blogContract = blogContract
    },
  },
})
