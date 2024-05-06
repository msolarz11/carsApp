<template>
  <div>
    <Header/>
    <div class="main">
      <Loader v-show="getLoading()">
        {{ getLoading() }}
      </Loader>
      <RouterLink
        v-for="car in carsList"
        :to="`/car/${car.id}`"
        :key="car.id"
      >
        <CarTile v-bind:car="car" />
      </RouterLink>

    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import CarTile from '@/components/CarTile.vue'
  import Loader from '@/components/Loader.vue';
  export default {
    components:{Header, Footer, CarTile, Loader},
    methods:{
      getLoading(){
        return this.$store.getters.GET_CARS_LOADING
      }
    },
    computed:{
      carsList(){
        return this.$store.getters.GET_CARS_LIST;
      },
    },
    created() {
      this.$store.dispatch("FETCH_CARS");
    }  
  }
</script>

<style lang="scss" scoped>

</style>
