<script setup lang="ts">
import { ref } from 'vue';
import Icon from '@/components/Icon.vue';
import { useHeightDiff } from '@tb-dev/vue';
import { useColorMode } from '@vueuse/core';

const header = ref<HTMLElement>();
const contentHeight = useHeightDiff(header);

useColorMode().value = 'dark';
</script>

<template>
  <main class="fixed inset-0 overflow-hidden bg-surface">
    <header
      ref="header"
      class="flex h-16 w-full items-center justify-between gap-6 whitespace-nowrap px-4 py-0"
    >
      <RouterLink :to="{ name: 'home' }" class="flex items-center justify-start">
        <div class="mr-2 flex size-8 items-center overflow-hidden rounded-full">
          <img src="/katsuo.png" alt="logo" decoding="async" class="inline w-full" />
        </div>
        <div class="flex items-center">
          <span class="text-2xl font-semibold">ferreira-tb</span>
        </div>
      </RouterLink>

      <div class="flex items-center justify-end gap-4">
        <a href="https://discord.gg/ARd7McmVNv" target="_blank" rel="noopener noreferrer">
          <Icon name="discord" size="1.5rem" />
        </a>
        <a href="https://github.com/ferreira-tb" target="_blank" rel="noopener noreferrer">
          <Icon name="github" size="1.5rem" />
        </a>
      </div>
    </header>

    <div class="relative w-full overflow-hidden" :style="{ height: `${contentHeight}px` }">
      <RouterView #default="{ Component }">
        <template v-if="Component">
          <component :is="Component" />
        </template>
      </RouterView>
    </div>
  </main>
</template>
