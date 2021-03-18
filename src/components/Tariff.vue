<template>
  <div class="mb-5 pt-6 pb-5 px-6 w-full bg-white rounded-lg">
    <div class="tariff-header">
      <div class="flex justify-center">
        <img v-bind:src="tariff.imageUrl" />
      </div>
      <button
        class="hidden px-6 h-10 text-sm text-green-50 bg-green-500 rounded-md"
        v-on:click="openBroker"
      >
        Открыть счёт
      </button>
    </div>
    <div class="flex flex-col tariff-body mt-4 mb-6">
      <div
        class="rounded-lg bg-gray-200 text-center"
        v-if="tariff.alertInfo !== null"
        v-on:click="openAlert"
      >
        i
      </div>
      <div class="mx-auto pb-1 text-4xl xl:text-7xl font-bold text-green-500">
        {{ tariff.commission }}
      </div>
      <div class="mx-auto text-sm"> {{getCommissionFrequencyString()}} </div>
    </div>
    <button
      class="w-full h-10 text-sm text-green-50 bg-green-500 rounded-md"
      v-on:click="openBroker"
    >
      Открыть счёт
    </button>
    <div
      class="tariff-footer flex flex-col justify-center xl:justify-between mt-2 pt-3 text-xs xl:border-t-2 border-gray-100"
    >
      <div class="text-center text-gray-500">Тариф "{{ tariff.name }}"</div>
      <a
        href="#"
        class="mt-1 text-center text-blue-500"
        v-on:click="openConditions"
        >Прочитать условия</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// eslint-disable-next-line no-unused-vars
import { TariffViewState } from "./viewstate/TariffViewState";

class Props {
  tariff!: TariffViewState;
}

export default class Tariff extends Vue.with(Props) {
  openConditions() {
    let tariff = this.$props.tariff;

    this.openUrl(tariff.conditionsUrl);
  }

  openBroker() {
    let tariff = this.$props.tariff;

    this.sendEventToAnalytics(tariff);
    this.openUrl(tariff.url);
  }

  openUrl(url: string) {
    window.open(url, "_blank")?.focus();
  }

  openAlert() {
    let tariff = this.$props.tariff;

    window.alert(tariff.alertInfo);
  }

  getCommissionFrequencyString() {
    let tariff = this.$props.tariff;

    if (tariff.commissionFrequency !== null) {
      return tariff.commissionFrequency
    } else {
      return "в месяц"
    }
  }

  sendEventToAnalytics(tariff: TariffViewState) {
    this.$gtag.event("open_account", {
      tariff_name: tariff.broker + "_" + tariff.name,
      sum: tariff.userInput,
    });
  }
}
</script>