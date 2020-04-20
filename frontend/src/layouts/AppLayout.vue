<template>
  <div class="container">
    <the-app-header />

    <v-content>
      <slot />
    </v-content>

    <the-app-footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>
