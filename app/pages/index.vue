<script lang="ts" setup>

</script>

<template>
  <div class="relative">
    <PageHeader title="Dashboard" class="lg:hidden" />
    <DashboardHeroPattern />
    <div class="relative space-y-8 p-4 lg:p-16">
      <DashboardHeader />
      <DashboardTextInputPanel />
      <DashboardQuickActionsPanel />
    </div>
  </div>
</template>
