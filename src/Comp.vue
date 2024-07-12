<script setup lang="ts">
  import { useFooStore } from '@/stores/fooStore'

  const Foo = useFooStore()
  
  Foo.fooTask.perform()
</script>

<template>
  <div>
    <slot />
  </div>
</template>
