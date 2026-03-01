<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <OrganizationList
    :appearance="{
      elements: {
        rootBox: 'mx-auto',
        card: 'shadow-lg',
      },
    }"
  />
</template>
