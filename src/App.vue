<script setup>
import "./style.css";
import { kApp  } from "konsta/vue";
import { RouterView } from 'vue-router';
</script>

<template>
  <k-app theme="ios">
    <router-view></router-view>
  </k-app>
</template>
<style scoped></style>
