import { defineStore } from 'pinia' 
import { acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Title'
  }),
  actions: {
    increaseCounter(amount: number) {
      this.count += amount
    },
    decreaseCounter(amount: number) {
      this.count -= amount
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
