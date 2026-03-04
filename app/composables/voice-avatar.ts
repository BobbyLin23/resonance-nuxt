import type { MaybeRefOrGetter } from 'vue'
import { glass } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { computed, toValue } from 'vue'

export function useVoiceAvatar(seed: MaybeRefOrGetter<string>) {
  return computed(() => {
    const seedValue = toValue(seed)
    return createAvatar(glass, {
      seed: seedValue,
      size: 128,
    }).toDataUri()
  })
}
