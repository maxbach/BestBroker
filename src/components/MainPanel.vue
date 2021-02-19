<template>
  <div class="my-auto px-20">
    <a href="#" class="">
      <img src="../assets/logo.svg"/>
    </a>
    <h1 class="text-4xl pt-5 pb-8">
      Поможем подобрать брокера <br/>
      с самой низкой комиссией
    </h1>
    <div>
      <p class="text-sm pb-4">На какую сумму в месяц вы будете покупать акции?</p>
      <input class="py-2 pl-3 rounded-lg border-2 border-gray-300" type="text"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class MainPanel extends Vue {}
</script>
