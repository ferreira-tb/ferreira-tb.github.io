<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import { MScaffold, MTopAppbar } from 'manatsu';
</script>

<template>
  <MScaffold>
    <template #top-bar>
      <MTopAppbar title="ferreira-tb" :title-link="{ name: 'home' }">
        <template #logo>
          <div id="logo" class="size-8 overflow-hidden">
            <img src="/katsuo.png" alt="logo" decoding="async" class="inline w-full" />
          </div>
        </template>
        <template #end>
          <a href="https://github.com/ferreira-tb" target="_blank" rel="noopener noreferrer">
            <Icon name="github" size="1.5rem" />
          </a>
        </template>
      </MTopAppbar>
    </template>

    <RouterView #default="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <component :is="Component" />
        </Transition>
      </template>
    </RouterView>
  </MScaffold>
</template>

<style scoped>
#logo {
  border-radius: 50%;
}
</style>
