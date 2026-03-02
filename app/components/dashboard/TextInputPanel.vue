<script lang="ts" setup>
import { CoinsIcon } from 'lucide-vue-next'
import { TEXT_MAX_LENGTH } from '~/utils/constant'

const router = useRouter()

const text = ref('')

function handleGenerate() {
  const trimmed = text.value.trim()
  if (!trimmed)
    return

  router.push(`/text-to-speech?text=${encodeURIComponent(trimmed)}`)
}
</script>

<template>
  <div class="rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_white]">
    <div class="rounded-[20px] bg-[#F9F9F9] p-1">
      <div class="space-y-4 rounded-2xl bg-white p-4 drop-shadow-xs">
        <Textarea
          v-model="text"
          placeholder="Start typing or paste your text here..."
          class="min-h-35 resize-none border-0 bg-transparent p-0.5 shadow-none focus-visible:ring-0"
          :maxlength="TEXT_MAX_LENGTH"
        />
        <div class="flex items-center justify-between">
          <Badge variant="outline" class="gap-1.5 border-dashed">
            <CoinsIcon class="size-3 text-chart-5" />
            <span v-if="text.length === 0" class="text-xs">
              Start typing to estimate
            </span>
            <template v-else>
              <span class="text-xs">
                ${{ (text.length * 0.0003).toFixed(4) }}
              </span>
              <span class="text-xs">
                {{ ' ' }}estimated
              </span>
            </template>
          </Badge>
          <span class="text-xs text-muted-foreground">
            {{ text.length.toLocaleString() }} / {{ TEXT_MAX_LENGTH.toLocaleString() }} characters
          </span>
        </div>
      </div>

      <div class="flex items-center justify-end p-3">
        <Button
          size="sm"
          :disabled="!text.trim()"
          class="w-full lg:w-auto"
          @click="handleGenerate"
        >
          Generate speech
        </Button>
      </div>
    </div>
  </div>
</template>
