import { defineStore } from "pinia"
export const useWeb3Store = defineStore("web3", {
  state: () => ({
    count: 0,
    account: null,
  }),
  actions: {
    setAccount(account: null) {
      this.account = account
    },
  },
})
