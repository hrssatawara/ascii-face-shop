<template>

    <div class="product-item">
        <div class="card h-100 w-100 p-3">
            <p class="card-text p-3 bg-light text-dark rounded" :style="`font-size:${product.size}px`">{{ product.face }}</p>
            <p class="card-text"> Size <b-badge class="bg-dark">{{product.size}}</b-badge></p>
            <p class="card-text">{{ product.price | currency }}</p>
            <p class="card-text font-italic">
            {{ `Last updated ${formateDate(product.date)}` }}
            </p>
            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </div>
    </div>
  
</template>
<script>


export default {
  name: 'ProductItem',
  props: [ "product", ],
  methods:{
    formateDate(date){
        return window.timeAgo.format(new Date(date) - 24 * 60 * 60 * 1000);
    }
  },
}
</script>