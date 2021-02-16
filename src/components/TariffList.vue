<template>
  <div>
    <template v-for="tariff in tariffs" :key="tariff">
      <Tariff :comission="tariff"></Tariff>
    </template>
  </div>
</template>

<script>
import Tariff from "./Tariff.vue";

export default {
  components: { Tariff },
  name: "TariffList",
  props: {
    tariffs: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>