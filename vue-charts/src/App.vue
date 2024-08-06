<script lang="ts">
export default {
  name:'App',
  data(){
    return{
      options:{
        chart:{
          id: 'vuechart-example'
        },
        xaxis:{
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    }
  }

}
</script>

<template>
  <header>
    <span class="container">
      <h1 class="green">Charts</h1>
      <p>Estudo de libs para montar charts no Vue</p>
    </span>
  </header>

  <main>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </main>
</template>

<style scoped>

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
