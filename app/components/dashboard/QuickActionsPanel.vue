<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <h2 class="text-lg font-semibold">
      Quick actions
    </h2>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <DashboardQuickActionsCard
        v-for="action in quickActions"
        :key="action.title"
        v-bind="action"
      />
    </div>
  </div>
</template>
