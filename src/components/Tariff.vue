<template>
  <div class="mb-5 pt-6 pb-5 px-6 w-full bg-white rounded-lg">
    <div class="tariff-header lg:flex lg:flex-row lg:justify-between">
      <div class="flex justify-center">
        <img v-bind:src="tariff.imageUrl" />
      </div>
      <button
        class="hidden lg:inline-block px-6 h-10 text-sm text-green-50 bg-green-500 rounded-md"
        v-on:click="openBroker"
      >
        Открыть счёт
      </button>
    </div>
    <div class="tariff-body flex flex-col mt-4 mb-6">
      <div class="relative mx-auto pb-1 text-4xl xl:text-7xl font-bold text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="tariff.alertInfo !== null" v-on:click="openAlert" class="absolute -right-6 cursor-pointer">
          <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12.95 17H11.05V10.5H12.95V17ZM12 9.15C11.7726 9.15 11.5502 9.08255 11.3611 8.95619C11.172 8.82983 11.0246 8.65022 10.9375 8.44009C10.8505 8.22995 10.8277 7.99872 10.8721 7.77565C10.9165 7.55257 11.026 7.34766 11.1868 7.18683C11.3477 7.026 11.5526 6.91647 11.7757 6.8721C11.9987 6.82772 12.23 6.8505 12.4401 6.93754C12.6502 7.02458 12.8298 7.17198 12.9562 7.36109C13.0826 7.55021 13.15 7.77255 13.15 8C13.15 8.305 13.0288 8.59751 12.8132 8.81317C12.5975 9.02884 12.305 9.15 12 9.15Z" fill="#10b981"/>
        </svg>
        {{ tariff.commission }}
      </div>
      <div class="mx-auto text-sm"> {{getCommissionFrequencyString()}} </div>
    </div>
    <button
      class="lg:hidden w-full h-10 text-sm text-green-50 bg-green-500 rounded-md"
      v-on:click="openBroker"
    >
      Открыть счёт
    </button>
    <div
      class="tariff-footer flex flex-col lg:flex-row justify-center lg:justify-between mt-2 pt-3 text-xs lg:border-t-2 border-gray-100"
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