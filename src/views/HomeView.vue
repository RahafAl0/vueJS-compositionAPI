<template>
  <div class="home">
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="counter">{{ counter }}</span>
    <button @click="increaceCounter" class="btn">+</button>
  </div>
</template>



<script>
import { ref } from 'vue'

  export default {
    setup() {
      const counter = ref(0)

      const increaceCounter = () => {
        counter.value++
      }

      const decreaseCounter = () => {
        counter .value--
      }

      return {
        counter,
        increaceCounter,
        decreaseCounter
      }
    }
  }

</script>

<!-- <script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaceCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
};
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style> -->
