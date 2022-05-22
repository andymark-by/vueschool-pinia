import {acceptHMRUpdate, defineStore} from "pinia";

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products : []
    }
  },
  
  actions: {
    async fill() {
      this.products = (await import("@/data/products.json")).default
    }
  }
  
  // getters
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}