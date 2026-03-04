<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

const props = defineProps<{
  initialValues?: Partial<TTSFormValues>
}>()

const { $orpc } = useNuxtApp()
const { data: voices } = useQuery($orpc.voices.getAll.queryOptions())

const customVoices = computed(() => voices.value?.custom ?? [])
const systemVoices = computed(() => voices.value?.system ?? [])
const allVoices = computed(() => [...customVoices.value, ...systemVoices.value])
const fallbackVoiceId = computed(() => allVoices.value[0]?.id ?? '')

const resolvedVoiceId = computed(() => {
  const id = props.initialValues?.voiceId
  if (id && allVoices.value.some(v => v.id === id))
    return id
  return fallbackVoiceId.value
})

const defaultValues = computed<TTSFormValues>(() => ({
  ...defaultTTSValues,
  ...props.initialValues,
  voiceId: resolvedVoiceId.value,
}))

const voicesContext = computed(() => ({
  customVoices: customVoices.value,
  systemVoices: systemVoices.value,
  allVoices: allVoices.value,
}))

useHead({
  title: 'Text to speech',
})
</script>

<template>
  <div class="flex h-full min-h-0 flex-col overflow-hidden">
    <PageHeader title="Text to speech" />
    <TTSVoicesProvider v-if="voices" :value="voicesContext">
      <TextInputTextToSpeechForm :default-value="defaultValues">
        <div class="flex min-h-0 flex-1 overflow-hidden">
          <div class="flex min-h-0 flex-1 flex-col">
            <TextInputPanel />
            <VoicePreviewPlaceholder />
          </div>
          <TextInputSettingsPanel />
        </div>
      </TextInputTextToSpeechForm>
    </TTSVoicesProvider>
    <template v-else>
      <div class="size-full flex items-center flex-1 justify-center">
        <Spinner class="size-6" />
      </div>
    </template>
  </div>
</template>
