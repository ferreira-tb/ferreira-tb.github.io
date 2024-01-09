<script setup lang="ts">
import { MScaffold } from 'manatsu';
</script>

<template>
  <MScaffold>
    <main>
      <div class="placeholder">@ferreira-tb</div>
    </main>
  </MScaffold>
</template>

<style scoped lang="scss">
.placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  user-select: none;
  white-space: nowrap;
}
</style>
