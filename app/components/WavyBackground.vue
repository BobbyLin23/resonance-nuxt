<script setup lang="ts">
import { createNoise3D } from 'simplex-noise'
import { cn } from '~/lib/utils'

interface Props {
  class?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: 'slow' | 'fast'
  waveOpacity?: number
  waveYOffset?: number
}

const props = withDefaults(defineProps<Props>(), {
  blur: 10,
  speed: 'fast',
  waveOpacity: 0.5,
  waveYOffset: 250,
})

const noise = createNoise3D()
let w: number, h: number, nt: number, i: number, x: number, ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement | null
const canvasRef: Ref<HTMLCanvasElement | null> = ref(null)

function getSpeed(): number {
  switch (props.speed) {
    case 'slow':
      return 0.001
    case 'fast':
      return 0.002
    default:
      return 0.001
  }
}

function init(): (() => void) | undefined {
  canvas = canvasRef.value
  if (!canvas)
    return

  ctx = canvas.getContext('2d')
  if (!ctx)
    return

  w = ctx.canvas.width = window.innerWidth
  h = ctx.canvas.height = window.innerHeight
  ctx.filter = `blur(${props.blur}px)`
  nt = 0

  const handleResize = () => {
    w = ctx!.canvas.width = window.innerWidth
    h = ctx!.canvas.height = window.innerHeight
    ctx!.filter = `blur(${props.blur}px)`
  }

  window.addEventListener('resize', handleResize)
  render()

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}

const waveColors = props.colors ?? [
  '#38bdf8',
  '#818cf8',
  '#c084fc',
  '#e879f9',
  '#22d3ee',
]

function drawWave(n: number): void {
  if (!ctx)
    return

  nt += getSpeed()
  for (i = 0; i < n; i++) {
    ctx.beginPath()
    ctx.lineWidth = props.waveWidth || 50
    ctx.strokeStyle = waveColors[i % waveColors.length]
    for (x = 0; x < w; x += 5) {
      const y = noise(x / 800, 0.3 * i, nt) * 100
      ctx.lineTo(x, y + props.waveYOffset)
    }
    ctx.stroke()
    ctx.closePath()
  }
}

let animationId: number
function render(): void {
  if (!ctx)
    return

  ctx.fillStyle = props.backgroundFill ?? 'black'
  ctx.globalAlpha = props.waveOpacity || 0.5
  ctx.fillRect(0, 0, w, h)
  drawWave(5)
  animationId = requestAnimationFrame(render)
}

const isSafari = ref(false)

onMounted(() => {
  // I'm sorry but i have got to support it on safari.
  isSafari.value
    = typeof window !== 'undefined'
      && navigator.userAgent.includes('Safari')
      && !navigator.userAgent.includes('Chrome')

  const cleanup = init()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    cleanup?.()
  })
})
</script>

<template>
  <div
    :class="cn('h-screen flex flex-col items-center justify-center', containerClassName)"
    v-bind="$attrs"
  >
    <canvas
      id="canvas"
      ref="canvasRef"
      class="absolute inset-0 z-0"
      :style="{
        ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
      }"
    />
    <div :class="cn('relative z-10', props.class)">
      <slot />
    </div>
  </div>
</template>
