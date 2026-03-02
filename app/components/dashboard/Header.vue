<script lang="ts" setup>
import { HeadphonesIcon, ThumbsUpIcon } from 'lucide-vue-next'

const { user, isLoaded } = useUser()
</script>

<template>
  <div class="flex items-start justify-between">
    <div class="space-y-1">
      <p class="text-sm text-muted-foreground">
        Nice to see you
      </p>
      <h1 class="text-2xl lg:text-3xl font-semibold tracking-tight">
        {{ isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..." }}
      </h1>
    </div>

    <div class="lg:flex items-center gap-3 hidden">
      <Button variant="outline" size="sm" as-child>
        <Link href="mailto:business@codewithantonio.com">
          <ThumbsUpIcon />
          <span class="hidden lg:block">Feedback</span>
        </Link>
      </Button>
      <Button variant="outline" size="sm" as-child>
        <Link href="mailto:business@codewithantonio.com">
          <HeadphonesIcon />
          <span class="hidden lg:block">Need help?</span>
        </Link>
      </Button>
    </div>
  </div>
</template>
