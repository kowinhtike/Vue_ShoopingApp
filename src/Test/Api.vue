<template>
    <div>
        <h1>Api Testing</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, watch } from "vue";
  const items = ref([]);

  onMounted(async ()=>{
      try {
        const response = await fetch('https://65acc8e9adbd5aa31bdf8bda.mockapi.io/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        items.value = await response.json();
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
  })

  </script>
  