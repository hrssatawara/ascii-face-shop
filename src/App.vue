<template>
  <main id="app">
    <div class="container">
      <div class="row">
        <div class="col-8 text-center">
          <h4 class="pt-3">Our Products</h4>
        </div>
        <div class="col-4">
          Sort By 
          <b-form-select v-model="sort" :options="sortingOptions"></b-form-select>
        </div>
      </div>
      <div class="row" v-if="loading">
        <div class=" col-6 mx-auto  ">
          <div class="align-items-center">
            <b-spinner class="ml-auto"></b-spinner>
          </div>
        </div>
      </div>
      <div class="row" v-if="products" >
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex"
        />
      </div>
      <div class="row" v-else >
        <b-alert show variant="secondary">Sorry! No products found.</b-alert>
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
      baseURL: 'http://localhost:3000/',
      loading: false,
      products: [],
      sort:'price',
      sortingOptions: [
        {value:'size' , text:'Size'},
        {value:'price' , text:'Price'},
        {value:'id' , text:'Id'},
      ],
    }
  },
  created(){
    this.fetchProducts();
  },
  methods : {
    async fetchProducts(){
      const params= {
        _sort:this.sort
      };
      this.loading = true;
      // this.products = [];
      await window.axios.get(`${this.baseURL}products/`,{params})
            .then(res => {
                this.products = res.data;
                this.loading = false;
            })
            .catch(err => {
              this.loading = false;
              console.log(err,'ghgh');
            })
            .then(()=>{this.loading = false;});
    }
  },
  watch:{
    sort(){
      this.fetchProducts();
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
