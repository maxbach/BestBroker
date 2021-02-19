<template>
<div class="h-screen flex flex-row bg-gray-100">
  <MainPanel/>
  <TariffList :tariffs="tariffs"/>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPanel from './components/MainPanel.vue';
import TariffList from './components/TariffList.vue';
import { getTariffs } from "./components/TariffDto";

@Options({
  components: {
    MainPanel, TariffList
  },
})
export default class App extends Vue {
  tariffs = getTariffs()
}
</script>
