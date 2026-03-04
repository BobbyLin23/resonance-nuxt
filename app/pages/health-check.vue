<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

const { $orpc } = useNuxtApp()

const query = useQuery($orpc.health.check.queryOptions())
</script>

<template>
  <h2>oRPC and Tanstack Query | Health Check</h2>

  <div v-if="query.status.value === 'pending'">
    Loading...
  </div>
  <div v-else-if="query.status.value === 'error'">
    Something went wrong.
  </div>
  <div v-else>
    {{ query.data.value }}
  </div>
</template>
