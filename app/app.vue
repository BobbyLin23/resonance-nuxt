<script setup lang="ts">
useHead({
  title: 'Resonance',
  titleTemplate: '%s - Resonance',
  meta: [
    {
      name: 'description',
      content: 'AI-powered text-to-speech and voice cloning platform',
    },
  ],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
