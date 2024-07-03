<script setup lang="ts">
import { MButton, MCard } from 'manatsu';
import Icon from '@/components/Icon.vue';
import { useAsyncState } from '@vueuse/core';
import { getRepositories, parseLanguageName } from '@/utils/repository';

const { state: repos, isLoading } = useAsyncState<Repository[]>(getRepositories, []);

function view(repo: Repository) {
  globalThis.open(repo.url, '_blank');
}
</script>

<template>
  <div v-if="!isLoading" id="grid">
    <m-card
      v-for="repo of repos"
      :key="repo.name"
      :title="repo.name"
      :subtitle="repo.description"
      variant="elevated"
    >
      <template #default>
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center gap-2">
            <icon
              v-for="lang of repo.languages"
              :key="lang.node.name"
              :name="parseLanguageName(lang.node.name)"
              height="1rem"
            />
            <icon
              v-for="lang of repo.extraLanguages"
              :key="lang"
              :name="parseLanguageName(lang)"
              height="1rem"
            />
          </div>
          <div>
            <m-button @click="view(repo)">View</m-button>
          </div>
        </div>
      </template>
    </m-card>
  </div>

  <img
    v-else
    src="/icons/loading.svg"
    alt="loading"
    decoding="async"
    loading="lazy"
    class="absolute left-2/4 top-2/4 -translate-y-2/4 translate-x-2/4"
  />
</template>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
