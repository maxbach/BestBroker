<template>
  <div class="my-auto justify-center px-6 lg:px-20 pt-4">
    <a href="#" class="">
      <img src="../assets/bestbroker-logo.svg" class="w-full h-10" />
    </a>
    <h1 class="text-2xl lg:text-4xl pt-4 lg:pt-5 pb-4 lg:pb-8 text-center lg:text-left">
      Поможем подобрать брокера с самой низкой комиссией
    </h1>
    <div>
      <p class="text-sm pb-3">
        На какую сумму в месяц вы будете покупать акции?
      </p>
      <input
        class="py-2 pl-3 lg:w-48 w-full rounded-lg border-2 border-gray-300"
        type="number"
        v-bind:value="defaultValue"
        @input="$emit('change-text', $event.target.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  emits: ["change-text"],
})
export default class MainPanel extends Vue {
  defaultValue = 10000
  
  mounted() {
    this.$emit('change-text', this.defaultValue)
  }
}
</script>
