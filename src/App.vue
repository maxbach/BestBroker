<template>
<div class="flex flex-row">
  <MainPanel/>
  <TariffList :tariffs="[5, 10, 15, 20]"/>
</div>
</template>

<script>
import MainPanel from "./components/MainPanel.vue";
import TariffList from "./components/TariffList.vue";

export default {
  components: { MainPanel, TariffList },
  name: "App",
};
</script>

<style>

</style>
