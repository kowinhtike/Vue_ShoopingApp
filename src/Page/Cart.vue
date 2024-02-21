<template>
  <div class="container">
    <table class="table table-striped p-2 ">
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>+ -</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      <tr v-for="product in cartList" :key="product.id">
        <td>{{ product.name }}</td>
        <td><img style="width: 150px" v-bind:src="product.photo" alt="" /></td>
        <td>
          <span class="bg-success text-white m-2" @click="increaseCart(product)"
            >+</span
          ><span @click="decreaseCart(product)" class="bg-danger text-white m-2"
            >-</span
          >
        </td>
        <td>{{ product.qty }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.price * product.qty }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["cartList"],
  methods: {
    increaseCart(product) {
      product.qty++;
    },
    decreaseCart(product) {
      product.qty--;
    },
  },
};
</script>