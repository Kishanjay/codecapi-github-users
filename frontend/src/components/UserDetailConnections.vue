<template>
  <article class="panel is-secondary">
    <p class="panel-heading">
      User Connections
    </p>
    <p class="panel-tabs">
      <a
        :class="{'is_active': activeTab === 'repositories'}"
        @click="activeTab = 'repositories'"
      >Repositories</a>
      <a
        :class="{'is_active': activeTab === 'followers'}"
        @click="activeTab='followers'"
      >Followers</a>
    </p>

    <template v-if="activeTab === 'repositories'">
      <a
        v-for="repository in repositories"
        :key="repository.id"
        class="panel-block"
        :href="repository.html_url"
        target="_blank"
      >
        <span class="is-size-5">{{ repository.name }}</span>
        <p>{{ repository.description }}</p>
        <span
          v-if="repository.language"
          class="tag is-dark"
        >
          {{ repository.language }}
        </span>
      </a>
    </template>

    <template v-if="activeTab === 'followers'">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        class="panel-block"
        :to="{ name: 'user', params: { username: follower.login }}"
      >
        <span class="is-size-5">{{ follower.login }}</span>
      </router-link>
    </template>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { GithubUser, GithubRepository } from '@/types';
import UserRepository from '../repositories/UserRepository';

export default Vue.extend({
  props: {
    username: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      activeTab: 'repositories',

      repositories: [] as GithubRepository[],
      repositoriesError: '',

      followers: [] as GithubUser[],
      followersError: '',
    };
  },
  created() {
    this.loadRepositories();
    this.loadFollowers();
  },
  methods: {
    async loadRepositories() {
      try {
        this.repositories = await UserRepository.getRepositoriesByUsername(this.username);
      } catch (e) {
        this.repositoriesError = e;
      }
    },
    async loadFollowers() {
      try {
        this.followers = await UserRepository.getFollowersByUsername(this.username);
      } catch (e) {
        this.followersError = e;
      }
    },
  },
});
</script>
<style lang="stylus" scoped>
.is_active
  text-decoration: underline
.panel-block
  display: block
</style>
