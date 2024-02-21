import {createApp,ref} from 'vue'
import App from "./App.vue";

const app = createApp(App);

// Providing a global property
// for auto refresh use ref
const cartList = ref([])
app.provide('cartList', cartList);

app.mount('#app');