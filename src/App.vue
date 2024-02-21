<script setup>
import { ref, computed } from 'vue'
import Home from './Page/Home.vue'
import Cart from './Page/Cart.vue'
import Product from './Page/Product.vue'
import NotFound from './Page/NotFound.vue'
import Navbar from './Component/Navbar.vue'

const routes = {
  '/': Home,
  '/cart':Cart,
  '/product':Product
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
    <Navbar :currentPath="currentPath" />
    <component :is="currentView" />
</template>
