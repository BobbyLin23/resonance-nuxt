<script setup lang="ts">
/* eslint-disable perfectionist/sort-named-imports */
import type { TTSFormValues } from '~/composables/useTtsForm'
import { useForm } from '@tanstack/vue-form'
import z from 'zod'
import {
  TTSFormKey,
  defaultTTSValues,
  ttsFormOptions,
} from '~/composables/useTtsForm'

const props = defineProps<{
  defaultValue?: TTSFormValues
}>()

const ttsFormSchema = z.object({
  text: z.string().min(1, 'Please enter some text'),
  voiceId: z.string().min(1, 'Please select a voice'),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number(),
  repetitionPenalty: z.number(),
})

const form = useForm({
  ...ttsFormOptions,
  defaultValues: props.defaultValue ?? defaultTTSValues,
  validators: {
    onSubmit: ttsFormSchema,
  },
  onSubmit: async () => {},
})

provide(TTSFormKey, form)
</script>

<template>
  <form class="flex min-h-0 flex-1 overflow-hidden" @submit="form.handleSubmit">
    <slot />
  </form>
</template>
