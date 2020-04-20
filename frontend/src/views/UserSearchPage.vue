<template>
  <app-layout>
    <section class="section">
      <header>
        <div class="field">
          <div class="control">
            <input
              class="input is-large"
              type="text"
              placeholder="Search users"
            >
          </div>
        </div>
      </header>

      <div class="content">
        <table
          class="table"
          style="margin-top: 16px;"
        >
          <thead>
            <tr>
              <th>1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ss</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </app-layout>
</template>

<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';

import Vue from 'vue';

export default Vue.extend({
  components: {
    AppLayout,
  },
});
</script>
