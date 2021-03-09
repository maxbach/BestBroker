<template>
  <div class="mb-5 pt-6 pb-5 px-6 w-full bg-white rounded-lg">
    <div class="tariff-header flex justify-between">
      <div class="flex w-40">
        <img v-bind:src="tariff.imageUrl"/>
      </div>
      <button class="px-6 h-10 text-sm text-green-50 bg-green-500 rounded-md" v-on:click="openUrl(tariff.url)">Открыть счёт</button>
    </div>
    <div class="flex flex-col tariff-body mb-6">
      <div class="mx-auto pb-1 text-7xl font-bold text-green-500">
        {{ tariff.commission }} ₽
      </div>
      <div class="mx-auto text-sm">
        в месяц
      </div>
    </div>
    <div class="tariff-footer flex justify-between pt-3 text-xs border-t-2 border-gray-100">
      <div class="text-gray-500">Тариф "{{ tariff.name }}"</div>
      <a href="#" class="text-blue-500" v-on:click="openUrl()">Прочитать условия</a>
    </div> 
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// eslint-disable-next-line no-unused-vars
import { TariffViewState } from "./viewstate/TariffViewState";

class Props {
  tariff!: TariffViewState
}

export default class Tariff extends Vue.with(Props) {

  openUrl() {
    let tariff = this.$props.tariff
    
    this.sendEventToAnalytics(tariff)
    window.open(tariff.url, '_blank')?.focus()
  }

  sendEventToAnalytics(tariff: TariffViewState) {
    this.$gtag.event('open_account', {
        'tariff_name' : tariff.broker + "_" + tariff.name,
        'sum' : tariff.userInput
      })
  }

}

</script>