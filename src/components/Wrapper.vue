<script setup lang="ts">
import { onMounted, ref } from "vue"
import Canvas from '../modules/Canvas'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants'

const canvasRef = ref<HTMLCanvasElement>(null)

const canvas = ref<Canvas>(null)

onMounted(() => {
  if (canvasRef.value) {
    canvas.value = new Canvas(canvasRef.value)
    canvas.value.draw()
  }
})
</script>

<template>
  <canvas id="canvas" :width="CANVAS_WIDTH" :height="CANVAS_HEIGHT" ref="canvasRef"></canvas>
  <div>
    <button @click="canvas?.draw()">Play</button>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
