<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <SignUp
    :appearance="{
      elements: {
        rootBox: 'mx-auto',
        card: 'shadow-lg',
      },
    }"
  />
</template>
