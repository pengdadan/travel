<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: []
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
      console.log(res)
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
