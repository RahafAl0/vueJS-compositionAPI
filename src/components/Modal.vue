<template>
    <div class="modal">
      <h1>{{ title }}</h1>
      <h1><slot name="title" /></h1>
      <slot />
      <button >Close modal</button>
    </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'No title specified'
    }
  })
</script>

<style>
  .modals {
    background: pink;
    padding: 10px;
    position: absolute; 
     left: 0;
    top: 0; 
     width: 100%;
    height: 100%;
    z-index: 1; 
  }
</style>