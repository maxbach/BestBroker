<template>
  <div class="my-auto px-20">
    <a href="#" class="">
      <img src="../assets/logo.svg" />
    </a>
    <h1 class="text-4xl pt-5 pb-8">
      Поможем подобрать брокера <br />
      с самой низкой комиссией
    </h1>
    <div>
      <p class="text-sm pb-3">
        На какую сумму в месяц вы будете покупать акции?
      </p>
      <input
        class="py-2 pl-3 rounded-lg border-2 border-gray-300"
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
