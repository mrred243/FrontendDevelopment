<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(car, index) in cars" v-bind:key="index">
          <td>{{car.brand}}</td>
          <td>{{car.model}}</td>
          <td>{{car.color}}</td>
          <td>{{car.year}}</td>
          <td>{{car.price}} €</td>
          <td>{{car.fuel}}</td>
          <td><button v-on:click="deleteCar(car._links.car.href)">Delete</button></td>


        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'CarList',
    data() {
      return {
        cars: [],
      }
    },
    mounted() {
      this.fetchData;
        },
    method: {
      fetchData: function() {
          axios.get('https://carstockrest.herokuapp.com/cars')
          .then(response => (this.cars = response.data._embedded.cars));
      },
      deleteCar: function(link) {
          axios.delete(link)
          .then(() => this.fetchData)
      }

    }
  }
</script>

<style>
  table {
    margin-left:auto;
    margin-right:auto;
  }
</style>
