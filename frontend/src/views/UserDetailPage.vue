<template>
  <app-layout>
    <div
      class="container"
      style="margin-top: 16px;"
    >
      <app-loader v-if="loading" />

      <div
        v-if="user"
        class="columns"
      >
        <div class="column">
          <user-detail-general :user="user" />
        </div>

        <div class="column">
          <user-detail-connections :user="user" />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import AppLayout from '@/layouts/AppLayout.vue';
import AppLoader from '@/components/AppLoader.vue';
import UserDetailGeneral from '@/components/UserDetailGeneral.vue';
import UserDetailConnections from '@/components/UserDetailConnections.vue';

import UserRepository from '@/repositories/UserRepository';
import { GithubUser } from '@/types';

export default Vue.extend({
  components: {
    AppLayout,
    AppLoader,
    UserDetailGeneral,
    UserDetailConnections,
  },
  data() {
    return {
      user: null as null | GithubUser,
      loading: true,
      error: '',
    };
  },
  created() {
    this.loadUser(this.$route.params.username);
  },
  methods: {
    async loadUser(username: string) {
      this.loading = true;
      try {
        const user = await UserRepository.getUserByUsername(username);
        if (!user) { throw Error('user not found'); }
        this.user = user;
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
