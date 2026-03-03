<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  size?: 'default' | 'sm'
  disabled?: boolean
  isSubmitting: boolean
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'submit'): void
}>()
</script>

<template>
  <Button
    :size="size"
    :class="props.class"
    :disabled="disabled"
    @click="emits('submit')"
  >
    <template v-if="isSubmitting">
      <Spinner class="size-3" />
      Generating...
    </template>
    <template v-else>
      Generate speech
    </template>
  </Button>
</template>
