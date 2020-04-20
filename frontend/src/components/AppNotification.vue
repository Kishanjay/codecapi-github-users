<template>
  <div
    class="notification is-light"
    :class="typeToClassMap[type]"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: {
      required: false,
      type: String,
      default: 'info',
      validator: (value) => ['info', 'warning'].includes(value),
    },
  },
  data() {
    return {
      typeToClassMap: {
        info: 'is-info',
        warning: 'is-warning',
      },
    };
  },
});
</script>
