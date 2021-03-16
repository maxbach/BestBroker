<template>
  <div class="px-6 mt-8">
    <template v-for="tariff in tariffs" :key="tariff">
      <Tariff :tariff="tariff"></Tariff>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Tariff from "./Tariff.vue";
// eslint-disable-next-line no-unused-vars
import { TariffViewState } from "./viewstate/TariffViewState";

class Props {
  tariffs!: TariffViewState[];
}

@Options({
  components: {
    Tariff,
  },
})
export default class TariffList extends Vue.with(Props) {}
</script>
