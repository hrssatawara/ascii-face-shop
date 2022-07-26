<template>

    <div class="product-item col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <div class="card h-100 w-100 p-3">
            <p class="card-text p-3 bg-light text-dark rounded" :style="`font-size:${product.size}px`">{{ product.face }}</p>
            <p class="card-text"> Size <b-badge class="bg-dark">{{product.size}}</b-badge></p>
            <p class="card-text">{{ product.price | currency }}</p>
            <p class="card-text font-italic">
            {{ `Last updated ${formateDate(product.date)}` }}
            </p>
            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </div>
        <div v-if="everyTwenty" class="col-md-6  col-xl-4 col-12 pt-3  justify-content-around d-flex">
            <random-ads :baseURL="baseURL"/>
        </div>
    </div>
  
</template>
<script>

import RandomAds from './RandomAds';

export default {
  name: 'ProductItem',
  components: { 
    RandomAds
  },
  props: {
    product:{
        type: [Array, Object],
        default: ()=>[]
    },
    index:{
        type:Number,
        default:0,
    },
    baseURL:{
      type: String,
      default:null
    }
  },
  computed: {
      //To display add after 20th product
      everyTwenty() {
      return (this.index + 1) % 20 === 0;
      }
  },
  methods:{
    // Format date to since
    formateDate(date){
        return window.timeAgo.format(new Date(date) - 24 * 60 * 60 * 1000);
    }
  },
}
</script>