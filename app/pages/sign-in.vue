<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <SignIn
    :appearance="{
      elements: {
        rootBox: 'mx-auto',
        card: 'shadow-lg',
      },
    }"
  />
</template>
