<template>
  <div class="home">
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="counter">{{ counter }}</span>
    <button @click="increaceCounter" class="btn">+</button>
  </div>
</template>

<script>
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
</style>
