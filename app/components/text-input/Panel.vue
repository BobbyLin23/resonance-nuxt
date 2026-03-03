<script lang="ts" setup>
import { useStore } from '@tanstack/vue-form'
import { CoinsIcon } from 'lucide-vue-next'

const form = inject(TTSFormKey) as TTSFormApi

const text = useStore(form.store, s => s.values.text)
const isSubmitting = useStore(form.store, s => s.isSubmitting)
const isValid = useStore(form.store, s => s.isValid)
</script>

<template>
  <div class="flex h-full min-h-0 flex-col flex-1">
    <div class="relative min-h-0 flex-1">
      <form.Field name="text">
        <template #default="{ field }">
          <Textarea
            :model-value="field.state.value"
            @update:model-value="(val) => field.handleChange(String(val ?? ''))"
            placeholder="Start typing or paste your text here..."
            class="absolute inset-0 resize-none border-0 bg-transparent p-4 pb-6 lg:p-6 lg:pb-8 text-base! leading-relaxed tracking-tight shadow-none wrap-break-word focus-visible:ring-0"
            :max-length="TEXT_MAX_LENGTH"
            :disabled="isSubmitting"
          />
        </template>
      </form.Field>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background to-transparent" />
    </div>
    <div class="shrink-0 p-4 lg:p-6">
      <div class="flex flex-col gap-3 lg:hidden">
        <GenerateButton
          class="w-full"
          :disabled="isSubmitting"
          :is-submitting="isSubmitting"
          @submit="form.handleSubmit"
        />
      </div>
      <div v-if="text.length > 0" class="hidden items-center justify-between lg:flex">
        <Badge variant="outline" class="gap-1.5 border-dashed">
          <CoinsIcon class="size-3 text-chart-5" />
          <span class="text-xs">
            <span class="tabular-nums">
              ${{ (text.length * COST_PER_UNIT).toFixed(4) }}
            </span>&nbsp;
            estimated
          </span>
        </Badge>
        <div class="flex items-center gap-3">
          <p class="text-xs tracking-tight">
            {{ text.length.toLocaleString() }}
            <span class="text-muted-foreground">
              &nbsp;/&nbsp;{{ TEXT_MAX_LENGTH.toLocaleString() }} characters
            </span>
          </p>
          <GenerateButton
            size="sm"
            :disabled="isSubmitting || !isValid"
            :is-submitting="isSubmitting"
            @submit="form.handleSubmit()"
          />
        </div>
      </div>
      <div v-else class="hidden lg:block">
        <p class="text-sm text-muted-foreground">
          Get started by typing or pasting text above
        </p>
      </div>
    </div>
  </div>
</template>
