<template>
  <app-layout>
    <section
      class="section"
    >
      <header>
        <div class="field">
          <div
            class="control is-large"
            :class="{'is-loading': loading}"
          >
            <input
              class="input is-large"
              type="text"
              placeholder="Search users"
              @input="ev => debouncedSearchUsers(ev.target.value)"
            >
          </div>
        </div>

        <app-loader v-if="loading" />
      </header>

      <div
        v-if="!loading"
        class="content"
      >
        <app-notification v-if="users.length === 0">
          No results found for the given username
        </app-notification>
        <table
          v-else
          class="table"
          style="margin-top: 16px;"
          :class="{'table-loading': loading}"
        >
          <thead>
            <tr>
              <th>login</th>
              <th>url</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in users"
              :key="user.id"
            >
              <td>{{ user.login }} </td>
              <td>{{ user.url }} </td>
              <td>
                <router-link :to="`/user/${user.login}`">
                  More details
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </app-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import AppLayout from '@/layouts/AppLayout.vue';
import AppLoader from '@/components/AppLoader.vue';
import AppNotification from '@/components/AppNotification.vue';

import UserRepository from '@/repositories/UserRepository';

import { GithubUser } from '@/types';

import { debounce } from 'lodash';

export default Vue.extend({
  components: {
    AppLayout,
    AppLoader,
    AppNotification,
  },
  data() {
    return {
      error: null,
      users: [] as GithubUser[],
      loading: false,
    };
  },
  methods: {
    debouncedSearchUsers: debounce(
      function debouncedSearchUsers(this: { searchUsers: Function }, username: string) {
        this.searchUsers(username);
      }, 200,
    ),
    async searchUsers(username: string) {
      this.loading = true;
      this.error = null;
      try {
        this.users = await UserRepository.searchUsersByUsername(username);
      } catch (e) {
        this.users = [];
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
<style lang="stylus" scoped>
.table-loading
  opacity: 0.3
</style>
