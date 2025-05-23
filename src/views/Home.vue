<script setup lang="ts">
import { asyncRef } from '@tb-dev/vue';
import Icon from '@/components/Icon.vue';
import { Button } from '@tb-dev/vue-components';
import ProjectCard from '@/components/ProjectCard.vue';
import { getRepositories, parseLanguageName } from '@/lib/repository';

const { state: repos, isLoading } = asyncRef<Repository[]>([], getRepositories);

function openRepository(repo: Repository) {
  globalThis.open(repo.url, '_blank');
}
</script>

<template>
  <div class="relative size-full overflow-y-auto overflow-x-hidden p-4">
    <div v-if="!isLoading" id="grid">
      <ProjectCard
        v-for="repo of repos"
        :key="repo.name"
        :title="repo.name"
        :description="repo.description"
      >
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center gap-2">
            <Icon
              v-for="lang of repo.languages"
              :key="lang.node.name"
              :name="parseLanguageName(lang.node.name)"
              height="1rem"
            />
            <Icon
              v-for="lang of repo.extraLanguages"
              :key="lang"
              :name="parseLanguageName(lang)"
              height="1rem"
            />
          </div>
          <div>
            <Button class="cursor-pointer" @click="() => openRepository(repo)">View</Button>
          </div>
        </div>
      </ProjectCard>
    </div>

    <img
      v-else
      src="/icons/loading.svg"
      alt="loading"
      decoding="async"
      loading="lazy"
      class="loading absolute left-2/4 top-2/4 -translate-y-2/4 translate-x-2/4"
    />
  </div>
</template>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
