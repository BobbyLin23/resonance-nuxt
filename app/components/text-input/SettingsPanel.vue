<script lang="ts" setup>
import { HistoryIcon, SettingsIcon } from 'lucide-vue-next'

const tabTriggerClassName
  = 'flex-1 h-full gap-2 bg-transparent rounded-none border-x-0 border-t-0 border-b-px border-b-transparent shadow-none data-[state=active]:border-b-foreground group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none'
</script>

<template>
  <div class="hidden w-105 min-h-0 flex-col border-l lg:flex">
    <Tabs default-value="settings" class="flex h-full min-h-0 flex-col gap-y-0">
      <TabsList class="w-full bg-transparent rounded-none border-b h-12 group-data-[orientation=horizontal]/tabs:h-12 p-0">
        <TabsTrigger value="settings" :class="tabTriggerClassName">
          <SettingsIcon class="size-4" />
          Settings
        </TabsTrigger>
        <TabsTrigger value="history" :class="tabTriggerClassName">
          <HistoryIcon class="size-4" />
          History
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="settings"
        class="mt-0 flex min-h-0 flex-1 flex-col overflow-y-auto"
      >
        <TextInputSettingsPanelSettings />
      </TabsContent>
      <TabsContent
        value="history"
        class="mt-0 flex min-h-0 flex-1 flex-col overflow-y-auto"
      >
        <TextInputSettingsPanelHistory />
      </TabsContent>
    </Tabs>
  </div>
</template>
