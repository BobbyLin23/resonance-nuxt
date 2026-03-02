<script lang="ts" setup>

</script>

<template>
  <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
    <WavyBackground
      :colors="['#2DD4BF', '#22D3EE', '#38BDF8', '#818CF8']"
      background-fill="hsl(0 0% 100%)"
      :blur="3"
      speed="slow"
      :wave-opacity="0.1"
      :wave-width="60"
      :wave-y-offset="250"
      container-class-name="h-full"
      class="hidden"
    />
  </div>
</template>
