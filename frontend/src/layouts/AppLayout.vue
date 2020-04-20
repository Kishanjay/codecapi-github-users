<template>
  <div class="layout">
    <the-app-header />

    <div style="flex-grow: 1">
      <slot />
    </div>

    <the-app-footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

import TheAppHeader from '@/components/TheAppHeader.vue';
import TheAppFooter from '@/components/TheAppFooter.vue';

export default Vue.extend({
  components: {
    TheAppHeader,
    TheAppFooter,
  },
});
</script>
<style lang="stylus" scoped>
.layout
  display: flex
  flex-direction: column
  align-items: stretch
  min-height: 100vh
</style>
