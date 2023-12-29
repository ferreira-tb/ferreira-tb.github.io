<script setup lang="ts">
import { type IconLinkProps, MNavbar, MScaffold } from 'manatsu';

const socialLinks: IconLinkProps[] = [
  {
    icon: 'github',
    to: 'https://github.com/ferreira-tb'
  }
];
</script>

<template>
  <MScaffold navbar>
    <template #navbar>
      <MNavbar :social-links="socialLinks" />
    </template>
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
}
</style>
