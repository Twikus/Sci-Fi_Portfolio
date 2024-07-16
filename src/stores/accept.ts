import { defineStore } from 'pinia'

interface Accept {
  isAccepted: boolean
}

export const useAcceptStore = defineStore('acceptation', {
  state: (): Accept => ({
    isAccepted: false,
  }),
  actions: {
    accept() {
      this.isAccepted = true
    },
  },
})
