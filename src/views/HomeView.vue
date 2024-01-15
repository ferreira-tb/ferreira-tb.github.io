<script setup lang="ts">
import { MButton, MCard } from 'manatsu';
import Icon from '@/components/Icon.vue';
import { useAsyncState } from '@vueuse/core';

const { state: repos, isLoading } = useAsyncState<Repository[]>(async () => {
  const response = await fetch('/data/repos.json');
  const repositories: Repository[] = await response.json();
  for (const repo of repositories) {
    repo.languages.sort((a, b) => b.size - a.size);
  }

  return repositories;
}, []);

function parseLanguageName(name: string) {
  let lang = name.trim().toLowerCase();
  if (lang === 'scss') lang = 'sass';
  return lang;
}

function openRepo(repo: Repository) {
  globalThis.open(repo.url, '_blank');
}
</script>

<template>
  <div v-if="!isLoading" id="repo-grid">
    <MCard
      v-for="repo of repos"
      :key="repo.name"
      :title="repo.name"
      :subtitle="repo.description"
      variant="filled"
    >
      <template #default>
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center gap-2">
            <Icon
              v-for="lang of repo.languages"
              :key="lang.node.name"
              :name="parseLanguageName(lang.node.name)"
              height="1rem"
            />
          </div>
          <div>
            <MButton variant="outlined" @click="openRepo(repo)">View</MButton>
          </div>
        </div>
      </template>
    </MCard>
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
#repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
