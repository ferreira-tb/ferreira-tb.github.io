<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import { MNavbar, MScaffold } from 'manatsu';
</script>

<template>
  <MScaffold>
    <template #header>
      <MNavbar title="ferreira-tb" :title-link="{ name: 'home' }">
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
      </MNavbar>
    </template>

    <RouterView #default="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <Suspense>
            <component :is="Component" />
            <template #fallback>
              <img
                src="/icons/loading.svg"
                alt="loading"
                decoding="async"
                loading="lazy"
                class="absolute left-2/4 top-2/4 -translate-y-2/4 translate-x-2/4"
              />
            </template>
          </Suspense>
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
