<script lang="ts" setup>
import { defaultTTSValues } from '~/composables/useTtsForm'

useHead({
  title: 'Text to speech',
})
</script>

<template>
  <div class="flex h-full min-h-0 flex-col overflow-hidden">
    <PageHeader title="Text to speech" />
    <TextInputTextToSpeechForm :default-value="defaultTTSValues">
      <div class="flex min-h-0 flex-1 flex-col">
        <TextInputPanel />
        <VoicePreviewPlaceholder />
      </div>
      <TextInputSettingsPanel />
    </TextInputTextToSpeechForm>
  </div>
</template>
