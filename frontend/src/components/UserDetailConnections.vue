<template>
  <article class="panel is-secondary">
    <p class="panel-heading">
      User Connections
    </p>
    <p class="panel-tabs">
      <a class="is_active">Repositories</a>
      <a>Followers</a>
    </p>
    <a class="panel-block is-active">
      <span class="panel-icon">
        <i
          class="fas fa-book"
          aria-hidden="true"
        />
      </span>
      bulma
    </a>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { GithubUser } from '@/types';
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

    };
  },
  created() {
    this.loadRepositories();
    // this.loadFollowers();
  },
  methods: {
    loadRepositories() {
      UserRepository.getRepositoriesByUsername(this.username);
    },
    // loadFollowers() {

    // },
  },
});
</script>
