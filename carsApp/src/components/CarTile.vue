<template>
    <div :style="carStyle">
      <h3>{{ this.car.car_name }}</h3>
      <h3>{{ this.car.car_type }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: "CarTile",
    props: { car: Object },
    computed: {
      carStyle() {
       
        return {
          background: `blue`,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  </style>