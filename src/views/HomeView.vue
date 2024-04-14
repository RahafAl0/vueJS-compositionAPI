<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaceCounter(1, $event)" class="btn">+</button>
      <button @click="increaceCounter(2)" class="btn">++</button>
    </div>

    <p>This Counter Is {{ evenOrOdd }}</p>

    <div class="edit">
      <h4>edit coounter title</h4>
      <input v-model="counterData.title" type="text" v-autoFocus/>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  reactive,
  watch,
} from "vue";

import { vAutoFocus } from "@/directives/vAutoFocus";

const appTitle = "My Counter App";

// const counter = ref(0),
//   counterTitle = ref("My Counter");

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

watch(
  () => counterData.count,
  (newCount) => {
    if (newCount === 20) {
      alert("Way to go! It is 20");
    }
  }
);

const evenOrOdd = computed(() => {
  if (counterData.count % 2 === 0) return "even";
  return "odd";
});

const increaceCounter = (amount, e) => {
  console.log(e);
  counterData.count += amount;
};

const decreaseCounter = (amount) => {
  counterData.count -= amount;
};

onMounted(() => {
  console.log('Do stuff related to Counter')
})

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
.edit {
  margin-top: 60px;
}
</style>
