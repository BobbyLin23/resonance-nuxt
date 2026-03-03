import type { InjectionKey } from 'vue'
import { formOptions, useForm } from '@tanstack/vue-form'
import z from 'zod'

const ttsFormSchema = z.object({
  text: z.string().min(1, 'Please enter some text'),
  voiceId: z.string().min(1, 'Please select a voice'),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number(),
  repetitionPenalty: z.number(),
})

export type TTSFormValues = z.infer<typeof ttsFormSchema>

export const defaultTTSValues: TTSFormValues = {
  text: '',
  voiceId: '',
  temperature: 0.8,
  topP: 0.95,
  topK: 1000,
  repetitionPenalty: 1.2,
}

export const ttsFormOptions = formOptions({
  defaultValues: defaultTTSValues,
})

function _createTtsForm() {
  return useForm({
    ...ttsFormOptions,
    validators: { onSubmit: ttsFormSchema },
    onSubmit: async () => {},
  })
}
export type TTSFormApi = ReturnType<typeof _createTtsForm>

export const TTSFormKey: InjectionKey<TTSFormApi> = Symbol('tts-form')
