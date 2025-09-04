<script setup lang="ts">
import type { VNode } from 'vue';

defineProps<{
  description: string;
  title: string;
}>();

defineSlots<{ default: () => VNode; }>();
</script>

<template>
  <div class="card flex flex-col items-center justify-center rounded-md border border-border">
    <div class="flex w-full items-center justify-between gap-4 p-4">
      <div class="flex flex-1 flex-col items-start justify-center gap-1">
        <span class="text-base font-medium">{{ title }}</span>
        <span class="text-sm font-normal">{{ description }}</span>
      </div>
    </div>
    <div class="size-full overflow-hidden p-4 text-sm">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%);
}
</style>
