<template>
    <div class="random-ads">
        <div class="card h-100 w-100 p-3">
            <b-img :src="imgUrl" fluid alt="Responsive image"></b-img>
        </div>
    </div>
</template>
<script>


export default {
  name: 'RandomAds',
  props: {
    baseURL:{
      type: String,
      default:null
    }
  },
  computed: {
    // a computed getter
    imgUrl() {
      return `${this.baseURL}ads/?r=${Math.floor(Math.random()*1000)}`;
    }
  },
}
</script>