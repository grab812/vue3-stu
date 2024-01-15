<template>
  <div class="sub-menu">
    <ul class="tlt">
      <li v-for="menuItem in menuItems" :key="menuItem.label" :title="menuItem.title">
        <router-link :to="`${menuItem.link}`">
          {{ menuItem.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  menuItems: {
    Type: Array,
    default: ''
  }
})
</script>
