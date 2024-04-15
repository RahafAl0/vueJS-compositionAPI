import { defineStore } from 'pinia' 

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
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count %2 === 0) return 'even'
      return 'odd'
    }
  }
})
