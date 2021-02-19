<template>
  <div class="flex-grow pr-40">
    <template v-for="tariff in tariffs" :key="tariff">
      <Tariff :tariff="tariff"></Tariff>
    </template>
  </div>
</template>

<script lang="ts">

import { Vue, Options } from 'vue-class-component';
import Tariff from "./Tariff.vue";
// eslint-disable-next-line no-unused-vars
import { TariffDto } from './TariffDto';

class Props {
  tariffs!: TariffDto[]
}

@Options({
  components: {
    Tariff
  },
})
export default class TariffList extends Vue.with(Props) {}

</script>
