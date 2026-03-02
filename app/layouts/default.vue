<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['sidebar_state'])
const defaultOpen = computed(() => cookies.get('sidebar_state') === 'true')
</script>

<template>
  <SidebarProvider :default-open="defaultOpen" class="h-svh">
    <DashboardSidebar />
    <SidebarInset class="min-h-0 min-w-0">
      <main class="flex min-h-0 flex-1 flex-col">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
