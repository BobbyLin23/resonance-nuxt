<script lang="ts" setup>
import { useStore } from '@tanstack/vue-form'

const form = inject(TTSFormKey) as TTSFormApi

const isSubmitting = useStore(form.store, s => (s as { isSubmitting: boolean }).isSubmitting)
</script>

<template>
  <div class="border-b border-dashed p-4">
    <VoiceSelector />
  </div>
  <div class="p-4 flex-1">
    <FieldGroup class="gap-8">
      <form.Field v-for="slider in sliders" :key="slider.id" :name="slider.id">
        <template #default="{ field }">
          <Field>
            <FieldLabel>{{ slider.label }}</FieldLabel>
            <div class="flex items-center justify-between">
              <span class="text-xs text-muted-foreground">
                {{ slider.leftLabel }}
              </span>
              <span class="text-xs text-muted-foreground">
                {{ slider.rightLabel }}
              </span>
            </div>
            <Slider
              :model-value="[field.state.value]"
              :min="slider.min"
              :max="slider.max"
              :step="slider.step"
              :disabled="isSubmitting"
              class="**:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-thumb]:bg-foreground **:data-[slot=slider-track]:h-1"
              @update:model-value="($event) => field.handleChange($event?.[0] ?? 0)"
            />
          </Field>
        </template>
      </form.Field>
    </FieldGroup>
  </div>
</template>
