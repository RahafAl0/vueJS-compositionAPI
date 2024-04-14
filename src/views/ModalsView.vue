<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal" title="My modal title (via prop)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eos
        doloribus deleniti ea animi illo consequuntur ipsam laborum earum? Quae
        fugiat ex voluptate porro autem similique dolorem aliquam, vitae
        excepturi?
      </p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);
</script>
