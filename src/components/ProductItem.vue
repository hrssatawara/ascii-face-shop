<template>

    <div class="product-item">
        <div class="card h-100 w-100 p-3">
            <p class="card-text" :style="`font-size:${product.size}px`">{{ product.face }}</p>
            <p class="card-text"> Size <b-badge class="bg-dark">{{product.size}}</b-badge></p>
            <p class="card-text">{{ product.price | currency }}</p>
            <p class="card-text font-italic">
            {{ product.date }}
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </div>
    </div>
  
</template>
<script>
export default {
  name: 'ProductItem',
  props: [ "product", ],
}
</script>