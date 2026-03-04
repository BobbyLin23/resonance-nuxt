<script setup lang="ts">
import type { TTSVoicesContextValue } from '~/composables/useTTSVoices'
import { TTSVoicesKey } from '~/composables/useTTSVoices'

const props = defineProps<{
  value: TTSVoicesContextValue
}>()

provide(TTSVoicesKey, toRef(props, 'value'))
</script>

<template>
  <slot />
</template>
