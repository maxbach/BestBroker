<template>
<div class="h-screen flex flex-col xl:flex-row bg-gray-100">
  <MainPanel v-on:change-text="countTariffs"/>
  <TariffList :tariffs="tariffs"/>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPanel from './components/MainPanel.vue';
import TariffList from './components/TariffList.vue';
// eslint-disable-next-line no-unused-vars
import { TariffViewState } from './components/viewstate/TariffViewState';
import { countTariffs } from "./domain/CountTariffsViewState";

@Options({
  components: {
    MainPanel, TariffList
  },
})
export default class App extends Vue {
  tariffs: TariffViewState[] = []

  countTariffs(monthSum: number) {
    this.tariffs = countTariffs(monthSum)
  }
}
</script>
