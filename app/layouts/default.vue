<script lang="ts" setup>
const sidebarState = useCookie('sidebar_state', { default: () => 'true' })
const defaultOpen = computed(() => sidebarState.value !== 'false')
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
