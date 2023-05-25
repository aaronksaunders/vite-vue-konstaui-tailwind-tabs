<template>
  <k-page>
    <k-navbar title="Home Detail">
      <template #left>
        <k-navbar-back-link text="Back" @click="() => $router.back()" />
      </template>
    </k-navbar>
    <k-block>
      <p>This is Home Detail Page View</p>
    </k-block>
  </k-page>
</template>
<script setup>
import { kBlock, kPage, kNavbar, kNavbarBackLink } from "konsta/vue";
</script>
