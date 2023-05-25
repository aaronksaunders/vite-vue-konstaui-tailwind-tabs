<template>
  <k-page>
    <k-navbar :title="pageTitle" />

    <k-tabbar :labels="true" class="left-0 bottom-0 fixed">
      <k-tabbar-link
        :active="activeTab === 'tab-home'"
        @click="
          () => {
            activeTab = 'tab-home';
            pageTitle = 'Home';
          }
        "
        component="router-link"
        :link-props="{ to: '/tabs/home' }"
      >
        <template #label> Home </template>
      </k-tabbar-link>

      <!-- // ABOUT TAB -->
      <k-tabbar-link
        :active="activeTab === 'tab-about'"
        @click="
          () => {
            activeTab = 'tab-about';
            pageTitle = 'About';
          }
        "
        component="router-link"
        :link-props="{ to: '/tabs/about' }"
      >
        <template #label> About </template>
      </k-tabbar-link>
    </k-tabbar>
    <router-view name="tabs"></router-view>
  </k-page>
</template>

<script setup>
import { kPage, kNavbar, kTabbar, kTabbarLink } from "konsta/vue";
import { ref } from "vue";
const pageTitle = ref("Home");
const activeTab = ref("tab-home");
</script>
