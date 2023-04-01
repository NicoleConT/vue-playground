<script setup lang="ts">
import { Ref, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { instance as req } from './request'

const result: Ref<string> = ref('This is the initial string')

function testAxios () {
  req.post('/mock/test', {
    test: ''
  }).then(() => {
    result.value = 'Request succeeded!'
  }).catch(() => {
    result.value = 'Request failed!'
  })
}
</script>

<template>
  <div>
    <button @click="testAxios">click here to send a request!</button>
    <p>{{ result }}</p>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
