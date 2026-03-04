<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Avatar } from '~/components/ui/avatar'

const props = withDefaults(
  defineProps<{
    seed: string
    name: string
    class?: HTMLAttributes['class']
  }>(),
  {},
)

const avatarUrl = useVoiceAvatar(() => props.seed)
</script>

<template>
  <Avatar :class="cn('size-4 border-white shadow-xs', props.class)">
    <AvatarImage
      :src="avatarUrl"
      :alt="name"
    />
    <AvatarFallback class="text-[8px]">
      {{ name.slice(0, 2).toUpperCase() }}
    </AvatarFallback>
  </Avatar>
</template>
