import { defineStore, acceptHMRUpdate } from 'pinia'
import  { groupBy} from "lodash";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: []
    }
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: state => groupBy(state.items, item => item.name),
    groupCount: state => (name) => state.grouped[name].length,
    total: state => state.items.reduce((acc, item) =>  acc + item.price, 0)
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count)
      for ( let i = 0; i <  count; i++ ) {
        this.items.push({ ...item })
      }
    },
    clearItem(name) {
      this.items = this.items.filter((item) => item.name !== name)
    },
    setItemCount(item, count) {
      this.clearItem(item.name)
      this.addItems(count, item)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}