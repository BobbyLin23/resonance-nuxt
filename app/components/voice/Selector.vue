<script lang="ts" setup>
import type { VoiceCategory } from '~~/server/generated/prisma/client'
import { useStore } from '@tanstack/vue-form'
import { VOICE_CATEGORY_LABELS } from '~/data/voice-categories'

const form = inject(TTSFormKey) as TTSFormApi
const voicesContext = useTTSVoices()

const voiceId = useStore(form.store, s => s.values.voiceId)
const isSubmitting = useStore(form.store, s => s.isSubmitting)

const customVoices = computed(() => voicesContext.value.customVoices)
const systemVoices = computed(() => voicesContext.value.systemVoices)
const voices = computed(() => voicesContext.value.allVoices)

const selectedVoice = computed(() =>
  voices.value.find((v: TTSVoiceItem) => v.id === voiceId.value),
)
const hasMissingSelectedVoice = computed(
  () => Boolean(voiceId.value) && !selectedVoice.value,
)
const currentVoice = computed(() => {
  if (selectedVoice.value)
    return selectedVoice.value
  if (hasMissingSelectedVoice.value && voiceId.value)
    return { id: voiceId.value, name: 'Unavailable voice', category: null as VoiceCategory | null }
  return voices.value[0]
})

function onValueChange(v: unknown) {
  form.setFieldValue('voiceId', typeof v === 'string' ? v : '')
}
</script>

<template>
  <Field>
    <FieldLabel>Voice style</FieldLabel>
    <Select
      :model-value="voiceId"
      :disabled="isSubmitting"
      @update:model-value="onValueChange"
    >
      <SelectTrigger class="h-auto w-full gap-1 rounded-lg bg-white px-2 py-1">
        <SelectValue>
          <template v-if="currentVoice">
            <VoiceAvatar
              :seed="currentVoice.id"
              :name="currentVoice.name"
            />
            <span class="truncate text-sm font-medium tracking-tight">
              {{ currentVoice.name }}
              <template v-if="currentVoice.category">
                - {{ VOICE_CATEGORY_LABELS[currentVoice.category] }}
              </template>
            </span>
          </template>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <template v-if="hasMissingSelectedVoice && currentVoice">
          <SelectGroup>
            <SelectLabel>Selected Voice</SelectLabel>
            <SelectItem :value="currentVoice.id">
              <VoiceAvatar
                :seed="currentVoice.id"
                :name="currentVoice.name"
              />
              <span class="truncate text-sm font-medium">
                {{ currentVoice.name }}
                <template v-if="currentVoice.category">
                  - {{ VOICE_CATEGORY_LABELS[currentVoice.category] }}
                </template>
              </span>
            </SelectItem>
          </SelectGroup>
          <SelectSeparator v-if="customVoices.length > 0 || systemVoices.length > 0" />
        </template>
        <SelectGroup v-if="customVoices.length > 0">
          <SelectLabel>Team Voices</SelectLabel>
          <SelectItem
            v-for="v in customVoices"
            :key="v.id"
            :value="v.id"
          >
            <VoiceAvatar
              :seed="v.id"
              :name="v.name"
            />
            <span class="truncate text-sm font-medium">
              {{ v.name }} - {{ VOICE_CATEGORY_LABELS[v.category] }}
            </span>
          </SelectItem>
        </SelectGroup>
        <SelectSeparator v-if="customVoices.length > 0 && systemVoices.length > 0" />
        <SelectGroup v-if="systemVoices.length > 0">
          <SelectLabel>Built-in Voices</SelectLabel>
          <SelectItem
            v-for="v in systemVoices"
            :key="v.id"
            :value="v.id"
          >
            <VoiceAvatar
              :seed="v.id"
              :name="v.name"
            />
            <span class="truncate text-sm font-medium">
              {{ v.name }} - {{ VOICE_CATEGORY_LABELS[v.category] }}
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Field>
</template>
