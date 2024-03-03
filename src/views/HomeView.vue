<script setup lang="ts">
import { icons } from '@/assets/icons';
import { MButton, MCard } from 'manatsu';
import Icon from '@/components/Icon.vue';
import { useAsyncState } from '@vueuse/core';

const { state: repos, isLoading } = useAsyncState<Repository[]>(async () => {
  const response = await fetch('/data/repos.json');
  const repositories: Repository[] = await response.json();

  for (const repository of repositories) {
    repository.languages = repository.languages.filter((lang) => {
      const icon = icons[parse(lang.node.name)];
      return Boolean(icon);
    });

    repository.languages.sort((a, b) => b.size - a.size);
  }

  return repositories;
}, []);

function parse(name: string) {
  let lang = name.trim().toLowerCase();
  if (lang === 'scss') lang = 'sass';
  return lang;
}

function view(repo: Repository) {
  globalThis.open(repo.url, '_blank');
}
</script>

<template>
  <div v-if="!isLoading" id="repository-grid">
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
            <Icon
              v-for="lang of repo.languages"
              :key="lang.node.name"
              :name="parse(lang.node.name)"
              height="1rem"
            />
            <Icon
              v-for="lang of repo.extraLanguages"
              :key="lang"
              :name="parse(lang)"
              height="1rem"
            />
          </div>
          <div>
            <MButton variant="outlined" @click="view(repo)">View</MButton>
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
#repository-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
