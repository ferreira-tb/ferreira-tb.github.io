<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import { MScaffold, MTopAppbar } from 'manatsu';
</script>

<template>
  <m-scaffold default-border="none">
    <template #top>
      <m-top-appbar
        title="ferreira-tb"
        :title-link="{ name: 'home' }"
        end-class="flex items-center justify-center gap-4"
      >
        <template #logo>
          <div class="size-8 overflow-hidden rounded-full">
            <img src="/katsuo.png" alt="logo" decoding="async" class="inline w-full" />
          </div>
        </template>
        <template #end>
          <a href="https://twitter.com/aferreira_tb" target="_blank" rel="noopener noreferrer">
            <icon name="x" size="1.5rem" />
          </a>
          <a href="https://github.com/ferreira-tb" target="_blank" rel="noopener noreferrer">
            <icon name="github" size="1.5rem" />
          </a>
        </template>
      </m-top-appbar>
    </template>

    <router-view #default="{ Component }">
      <template v-if="Component">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </template>
    </router-view>
  </m-scaffold>
</template>
