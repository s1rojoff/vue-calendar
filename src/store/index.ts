import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      countMonth: new Date().getMonth(),
    };
  },
  actions: {
    increment() {
      if (this.countMonth >= 11) {
        this.countMonth = 0;
      } else {
        this.countMonth++;
      }
    },
    decriment() {
      if (this.countMonth <= 0) {
        this.countMonth = 11;
      } else {
        this.countMonth--;
      }
    },
  },
});
