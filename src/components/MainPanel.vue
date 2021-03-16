<template>
  <div class="md:flex-1 my-auto px-6 lg:px-20 pt-4">
    <a href="#" class="">
      <img src="../assets/bestbroker-logo.svg" class="w-full md:w-44" />
    </a>
    <h1 class="text-2xl lg:text-4xl pt-4 md:pt-2 lg:pt-5 pb-4 md:pb-5 lg:pb-8 text-center md:text-left">
      Поможем подобрать брокера с самой низкой комиссией
    </h1>
    <div>
      <p class="text-sm pb-3">
        Какую сумму в месяц вы будете инвестировать?
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
