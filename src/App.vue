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
      <div class="row">
        <ProductItem
          v-for="(product,index) in products"
          :key="product.id"
          :index="index"
          :product="product"
          :baseURL="baseURL"
        />
        <!-- <random-ads :baseURL="baseURL"/> -->
      </div>
      <infinite-loading spinner="waveDots" :identifier="infiniteId" @infinite="fetchProducts">
        <div slot="no-more">End of catalogue :)</div>
      </infinite-loading>
    </div>
  </main>
</template>

<script>

import ProductItem from './components/ProductItem';

export default {
  name: 'App',
  components: { 
    ProductItem
    },
  data(){
    return{
      baseURL: 'http://localhost:3000/',
      products: [],
      sort:'price',
      page: 1,
      limit: 15,
      sortingOptions: [
        {value:'size' , text:'Size'},
        {value:'price' , text:'Price'},
        {value:'id' , text:'Id'},
      ],
      infiniteId: +new Date(),
    }
  },
  created(){},
  methods : {
    async fetchProducts($state){
      const params= {
        _page:this.page,
        _sort:this.sort,
        _limit:this.limit
      };
      this.loading = true;
      await window.axios.get(`${this.baseURL}products/`,{params})
            .then(res => {
              if (res.data.length) {
                this.page += 1;
                this.products.push(...res.data);
                $state.loaded();
              } else {
                $state.complete();
              }
            })
            .catch(err => {
              console.log(err);
            });
    }
  },
  watch:{
    sort(){
      this.page = 1;
      this.products = [];
      this.infiniteId += 1;
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
