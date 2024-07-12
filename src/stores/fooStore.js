import { useTask } from 'vue-concurrency'
import { defineStore } from 'pinia'

export const useFooStore = defineStore('foo', () => {
  console.log('task initialised')

  const fooTask = useTask(function* () {
    console.log('performed')
    return yield null
  });

  return { fooTask }
})
