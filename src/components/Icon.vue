<script setup lang="ts">
import { computed } from 'vue';
import { icons } from '@/lib/icons';

interface Props {
  height?: string;
  name: string;
  size?: string;
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
  height: 'auto'
});

const icon = computed(() => icons[props.name]);
const iconWidth = computed(() => props.size ?? props.width);
const iconHeight = computed(() => props.size ?? props.height);
</script>

<template>
  <span class="icon flex items-center justify-center" v-html="icon"></span>
</template>

<style scoped>
.icon > :deep(svg) {
  width: v-bind('iconWidth');
  height: v-bind('iconHeight');
}
</style>
