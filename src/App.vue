<script setup>
  import { ref } from 'vue'
  import Comp from './Comp.vue'

  const show = ref(true)
</script>

<template>
  <button @click="show = !show">TOGGLE</button>

  <Comp v-if="show">A</Comp>
  <Comp v-if="!show">B</Comp>
</template>

