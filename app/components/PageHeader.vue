<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { HeadphonesIcon, ThumbsUpIcon } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

const props = defineProps<{
  title: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex items-center justify-between border-b p-4', props.class)">
    <div class="flex items-center gap-2">
      <SidebarTrigger class="size-4" />
      <h1 class="text-lg font-semibold tracking-tight">
        {{ title }}
      </h1>
    </div>
    <div class="flex items-center gap-3">
      <Button variant="outline" size="sm" as-child>
        <NuxtLink href="mailto:business@codewithantonio.com">
          <ThumbsUpIcon class="size-4" />
          <span class="hidden lg:block">Feedback</span>
        </NuxtLink>
      </Button>
      <Button variant="outline" size="sm" as-child>
        <NuxtLink href="mailto:business@codewithantonio.com">
          <HeadphonesIcon class="size-4" />
          <span class="hidden lg:block">Need help?</span>
        </NuxtLink>
      </Button>
    </div>
  </div>
</template>
