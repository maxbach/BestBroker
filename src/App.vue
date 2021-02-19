<template>
<div class="h-screen flex flex-row bg-gray-100">
  <MainPanel v-on:change-text="countTariffs"/>
  <TariffList :tariffs="tariffs"/>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPanel from './components/MainPanel.vue';
import TariffList from './components/TariffList.vue';
import { getTariffs } from "./domain/GetTariffUseCase";
// eslint-disable-next-line no-unused-vars
import { TariffDto } from './domain/TariffDto';

@Options({
  components: {
    MainPanel, TariffList
  },
})
export default class App extends Vue {
  tariffs: TariffDto[] = []

  countTariffs(monthSum: string) {
    console.log(monthSum)
    this.tariffs = getTariffs(monthSum)
  }
}
</script>
