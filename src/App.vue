<template>
  <main id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Our Products</h4>
        </div>
      </div>
      <div class="row">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex"
        />
      </div>
  </div>
  </main>
</template>

<script>

import ProductItem from './components/ProductItem';



export default {
  name: 'App',
  components: { ProductItem},
  data(){
    return{
      products: [
      {
      "id": "29477-o3q29b8mxsn",
      "size": 24,
      "price": 634,
      "face": "( .-. )",
      "date": "Mon Jul 11 2022 03:34:07 GMT+0530 (India Standard Time)"
    },
    {
      "id": "96081-5qwm99sjvo6",
      "size": 13,
      "price": 995,
      "face": "( .o.)",
      "date": "Fri Jul 08 2022 01:05:40 GMT+0530 (India Standard Time)"
    },
    {
      "id": "3337-hlp2sr8ua06",
      "size": 25,
      "price": 863,
      "face": "( `·´ )",
      "date": "Tue Jul 19 2022 17:46:43 GMT+0530 (India Standard Time)"
    },
    {
      "id": "1776-fkud2m6wfyn",
      "size": 35,
      "price": 137,
      "face": "( ° ͜ ʖ °)",
      "date": "Sat Jul 09 2022 23:59:08 GMT+0530 (India Standard Time)"
    },
    {
      "id": "74533-8t0ngt1ezbs",
      "size": 29,
      "price": 785,
      "face": "( ͡° ͜ʖ ͡°)",
      "date": "Fri Jul 22 2022 19:58:54 GMT+0530 (India Standard Time)"
    },
    {
      "id": "1776-fkud2m6wfyn",
      "size": 35,
      "price": 137,
      "face": "( ° ͜ ʖ °)",
      "date": "Sat Jul 09 2022 23:59:08 GMT+0530 (India Standard Time)"
    },
    {
      "id": "74533-8t0ngt1ezbs",
      "size": 29,
      "price": 785,
      "face": "( ͡° ͜ʖ ͡°)",
      "date": "Fri Jul 22 2022 19:58:54 GMT+0530 (India Standard Time)"
    },
    {
      "id": "1776-fkud2m6wfyn",
      "size": 35,
      "price": 137,
      "face": "( ° ͜ ʖ °)",
      "date": "Sat Jul 09 2022 23:59:08 GMT+0530 (India Standard Time)"
    },
    {
      "id": "74533-8t0ngt1ezbs",
      "size": 29,
      "price": 785,
      "face": "( ͡° ͜ʖ ͡°)",
      "date": "Fri Jul 22 2022 19:58:54 GMT+0530 (India Standard Time)"
    }]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
