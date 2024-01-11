<script setup lang="ts">
import { MButton, MCard } from 'manatsu';
import { useAsyncState } from '@vueuse/core';

const { state: repos } = useAsyncState<Repository[]>(async () => {
  const response = await fetch('/repos.json');
  const repositories: Repository[] = await response.json();
  for (const repo of repositories) {
    repo.languages.sort((a, b) => b.size - a.size);
  }

  return repositories;
}, []);

function parseLanguageName(name: string) {
  let lang = name.toLowerCase();
  if (lang === 'scss') lang = 'sass';
  return lang;
}

function openRepo(repo: Repository) {
  globalThis.open(repo.url, '_blank');
}
</script>

<template>
  <main>
    <div class="repo-grid">
      <MCard
        v-for="repo of repos"
        :key="repo.name"
        :title="repo.name"
        :subtitle="repo.description"
        variant="elevated"
      >
        <template #default>
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-2">
              <img
                v-for="lang of repo.languages"
                :key="lang.node.name"
                :src="`/icons/${parseLanguageName(lang.node.name)}.svg`"
                class="h-4 w-4"
              />
            </div>
            <div>
              <MButton variant="outlined" @click="openRepo(repo)">View</MButton>
            </div>
          </div>
        </template>
      </MCard>
    </div>
  </main>
</template>

<style scoped>
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
