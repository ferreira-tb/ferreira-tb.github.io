<script setup lang="ts">
import { computed } from 'vue';
import { MNavbar, MScaffold, isDarkMode, useDarkMode } from 'manatsu';
import IconSun from './components/icons/IconSun.vue';
import IconMoon from './components/icons/IconMoon.vue';

const darkMode = useDarkMode();
const DarkModeIcon = computed(() => {
  const isDark = typeof darkMode.value === 'boolean' ? darkMode.value : isDarkMode();
  if (isDark) return IconSun;
  return IconMoon;
});
</script>

<template>
  <MScaffold>
    <template #header>
      <MNavbar title="ferreira-tb" :title-link="{ name: 'home' }">
        <template #end>
          <component :is="DarkModeIcon" class="h-6 w-6" @click="$mana.toggleDarkMode()" />
        </template>
      </MNavbar>
    </template>

    <RouterView #default="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <Suspense>
            <component :is="Component" />
            <template #fallback>Loading...</template>
          </Suspense>
        </Transition>
      </template>
    </RouterView>
  </MScaffold>
</template>
