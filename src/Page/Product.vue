<template>
  
  <div>
    <loader v-show="isLoaded" />
    <!-- Content -->

    <div class="container">
      <div class="row">

        <div v-for="product in products" :key="product.id" class="col-md-4">
          <div class="card p-3 m-3">
            <div class="card-header"> {{ product.name }} </div>
            <div class="card-body">
              <img
                class="w-100"
                v-bind:src="product.photo"
                alt=""
              />
            </div>
            <div class="card-footer">
              <span>Price: <small>${{ product.price }} </small></span>
              <a class="btn btn-sm btn-dark float-end" @click="addToCart(product)">Added to Cart</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../Component/Loader.vue";
//npm install axios
import axios from 'axios';
export default {
  components: { Loader },
  data() {
    return{
        isLoaded:true,products:[]
    }
  },
  created(){
    axios.get("https://65acc8e9adbd5aa31bdf8bda.mockapi.io/products").then((res)=>{
        this.products = res.data;
        this.isLoaded = false;
    })
  },
  inject:["cartList"],
  methods:{
    addToCart(product){
        //console.log(product)
        var isInCart = this.cartList.find(v => {
            return v.id == product.id
        })
        //console.log(isInCart)
        if(isInCart){
            isInCart.qty++;
        }else{
            this.cartList.push({...product,qty:1});
        }  
        console.log(this.cartList)
    }
  }
};
</script>
