<template>
  <div class="border-black border-2 rounded-lg p-8 m-8">
    Комиссия: {{ comission }}
  </div>
</template>

<script>
export default {
  name: "Tariff",
  props: {
    comission: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>