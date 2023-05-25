<template>
  <k-block>
    <p>This is Home View</p>
    <k-button class="!w-24 h-5 bg-lime-700"
    @click="$router.push('/tabs/home-detail')">Next Page</k-button>
  </k-block>
</template>
<script setup>
import { kBlock, kButton } from "konsta/vue";
</script>
