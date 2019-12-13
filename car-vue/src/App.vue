<template>
    <v-app>
        <v-toolbar >
            <v-toolbar-title class="headline">
                <span>CARLIST</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content><CarList/></v-content>
    </v-app>
</template>

<script>
import CarList from './components/CarList.vue';

export default {
  name: 'App',

  components: {
    CarList,
  },

  data: () => ({
    //
  }),
};
</script>
