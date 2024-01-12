<script setup lang="ts">
import { MNavbar, MScaffold } from 'manatsu';
</script>

<template>
  <MScaffold>
    <template #header>
      <MNavbar title="ferreira-tb" :title-link="{ name: 'home' }">
        <template #logo>
          <div id="logo" class="size-8 overflow-hidden">
            <img src="/katsuo.png" class="inline w-full" />
          </div>
        </template>
        <template #end>
          <a href="https://github.com/ferreira-tb" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" class="size-6" />
          </a>
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

<style scoped>
#logo {
  border-radius: 50%;
}
</style>
