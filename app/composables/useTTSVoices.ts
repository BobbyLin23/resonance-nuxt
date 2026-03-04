import type { InferClientOutputs } from '@orpc/client'
import type { RouterClient } from '@orpc/server'
import type { InjectionKey, Ref } from 'vue'
import type { router } from '~~/server/routers'

type ClientOutputs = InferClientOutputs<RouterClient<typeof router>>
export type TTSVoiceItem = ClientOutputs['voices']['getAll']['custom'][number]

export interface TTSVoicesContextValue {
  customVoices: TTSVoiceItem[]
  systemVoices: TTSVoiceItem[]
  allVoices: TTSVoiceItem[]
}

export const TTSVoicesKey: InjectionKey<Ref<TTSVoicesContextValue>> =
  Symbol('tts-voices')

export function useTTSVoices() {
  const context = inject(TTSVoicesKey)

  if (!context) {
    throw new Error('useTTSVoices must be used within a TTSVoicesProvider')
  }

  return context
}
