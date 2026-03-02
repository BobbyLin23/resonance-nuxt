<script lang="ts" setup>
import type { LucideIcon } from 'lucide-vue-next'

interface MenuItem {
  title: string
  url?: string
  icon: LucideIcon
  onClick?: () => void
};

interface NavSectionProps {
  label?: string
  items: MenuItem[]
  pathname: string
};

defineProps<NavSectionProps>()

const route = useRoute()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel v-if="label" class="text-[13px] uppercase text-muted-foreground">
      {{ label }}
    </SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in items" :key="item.title">
          <SidebarMenuButton
            :as-child="!!item.url"
            :tooltip="item.title"
            class="h-9 px-3 py-2 text-[13px] tracking-tight font-medium border border-transparent data-[active=true]:border-border data-[active=true]:shadow-[0px_1px_1px_0px_rgba(44,54,53,0.03),inset_0px_0px_0px_2px_white]"
            :is-active="item.url ? item.url === '/' ? route.path === '/' : route.path.startsWith(item.url) : false"
            @click="item.onClick"
          >
            <NuxtLink v-if="item.url" :to="item.url">
              <component :is="item.icon" />
              {{ item.title }}
            </NuxtLink>
            <template v-else>
              <component :is="item.icon" />
              {{ item.title }}
            </template>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
