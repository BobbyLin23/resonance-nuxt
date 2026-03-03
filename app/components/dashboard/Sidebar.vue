<script lang="ts" setup>
import type { LucideIcon } from 'lucide-vue-next'
import {
  AudioLinesIcon,
  HeadphonesIcon,
  HomeIcon,
  LayoutGridIcon,
  SettingsIcon,
  Volume2Icon,
} from 'lucide-vue-next'

interface MenuItem {
  title: string
  url?: string
  icon: LucideIcon
  onClick?: () => void
};

const clerk = useClerk()

const route = useRoute()

const mainMenuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: HomeIcon,
  },
  {
    title: 'Explore voices',
    url: '/voices',
    icon: LayoutGridIcon,
  },
  {
    title: 'Text to speech',
    url: '/text-to-speech',
    icon: AudioLinesIcon,
  },
  {
    title: 'Voice cloning',
    icon: Volume2Icon,
  },
]

const othersMenuItems: MenuItem[] = [
  {
    title: 'Settings',
    icon: SettingsIcon,
    onClick: () => clerk.value?.openOrganizationProfile(),
  },
  {
    title: 'Help and support',
    url: 'mailto:business@codewithantonio.com',
    icon: HeadphonesIcon,
  },
]
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader class="flex flex-col gap-4 pt-4">
      <div class="flex items-center gap-2 pl-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
        <NuxtImg
          src="/logo.svg"
          alt="Logo"
          :width="24"
          :height="24"
          class="rounded-sm"
        />
        <span class="group-data-[collapsible=icon]:hidden font-semibold text-lg tracking-tighter text-foreground">
          Resonance
        </span>
        <SidebarTrigger class="ml-auto lg:hidden" />
      </div>
      <SidebarMenu>
        <SidebarMenuItem>
          <OrganizationSwitcher
            hide-personal
            :appearance="{
              elements: {
                rootBox:
                  'w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!',
                organizationSwitcherTrigger:
                  'w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]!',
                organizationPreview: 'gap-2!',
                organizationPreviewAvatarBox: 'size-6! rounded-sm!',
                organizationPreviewTextContainer:
                  'text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!',
                organizationPreviewMainIdentifier: 'text-[13px]!',
                organizationSwitcherTriggerIcon:
                  'size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!',
              },
            }"
          >
            <template #fallback>
              <Skeleton
                class="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border bg-white"
              />
            </template>
          </OrganizationSwitcher>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <div class="border-b border-dashed border-border" />
    <SidebarContent>
      <DashboardNavSection
        :items="mainMenuItems"
        :pathname="route.path"
      />
      <DashboardNavSection
        label="Others"
        :items="othersMenuItems"
        :pathname="route.path"
      />
    </SidebarContent>
    <div class="border-b border-dashed border-border" />
    <SidebarFooter class="gap-3 py-3">
      <SidebarMenu>
        <SidebarMenuItem>
          <UserButton
            show-name
            :appearance="{
              elements: {
                rootBox:
                  'w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!',
                userButtonTrigger:
                  'w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden! [--border:color-mix(in_srgb,transparent,var(--clerk-color-neutral,#000000)_15%)]!',
                userButtonBox: 'flex-row-reverse! gap-2!',
                userButtonOuterIdentifier: 'text-[13px]! tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!',
                userButtonAvatarBox: 'size-6!',
              },
            }"
          >
            <template #fallback>
              <Skeleton
                class="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border bg-white"
              />
            </template>
          </UserButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
