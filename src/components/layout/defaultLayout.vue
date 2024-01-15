<template>
  <MainHeader />
  <Aside />
  <router-view />
  <MainFooter />
</template>

<script setup>
import MainHeader from '../common/MainHeader.vue'
import Aside from '../common/Aside.vue'
import MainFooter from '../common/MainFooter.vue'
</script>
