<script lang="ts" setup>
import type { QuickAction } from '~/utils/quick-actions'
import { ArrowRightIcon } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

defineProps<QuickAction>()
</script>

<template>
  <div class="flex gap-4 rounded-xl border bg-card p-3">
    <div
      :class="cn(
        'relative h-31 w-41 shrink-0 overflow-hidden rounded-xl bg-linear-to-br',
        gradient,
      )"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="size-12 rounded-full bg-white/30" />
      </div>
      <div class="absolute inset-2 rounded-lg ring-2 ring-inset ring-white/20" />
    </div>

    <div class="flex flex-col justify-between py-1">
      <div class="space-y-1">
        <h3 class="text-sm font-medium">
          {{ title }}
        </h3>
        <p class="text-xs text-muted-foreground leading-relaxed">
          {{ description }}
        </p>
      </div>
      <Button
        variant="outline"
        size="xs"
        class="w-fit"
        as-child
      >
        <NuxtLink :href="href">
          Try now
          <ArrowRightIcon class="size-3" />
        </NuxtLink>
      </Button>
    </div>
  </div>
</template>
