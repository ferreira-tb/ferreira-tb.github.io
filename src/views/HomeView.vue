<script setup lang="ts">
import { MCard } from 'manatsu';
import { useAsyncState } from '@vueuse/core';

const { state: repos } = useAsyncState<Repository[]>(
  () => fetch('/repos.json').then((res) => res.json()),
  []
);
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
      />
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
