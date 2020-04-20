<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="user.avatar_url"
              alt="Placeholder image"
            >
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ user.login }}
          </p>
          <p class="subtitle is-6">
            ID: {{ user.id }}
          </p>
        </div>
      </div>

      <div class="content">
        <dl>
          <dt>Type</dt>
          <dd>{{ user.type }}</dd>
          <dt>Admin</dt>
          <dd>{{ user.site_admin }}</dd>

          <template v-if="user.name">
            <dt>Name</dt>
            <dd>{{ user.name }}</dd>
          </template>
          <template v-if="user.company">
            <dt>Company</dt>
            <dd>{{ user.company }}</dd>
          </template>
          <template v-if="user.blog">
            <dt>Blog</dt>
            <dd>{{ user.blog }}</dd>
          </template>
          <template v-if="user.location">
            <dt>Location</dt>
            <dd>{{ user.location }}</dd>
          </template>
          <template v-if="user.email">
            <dt>Email</dt>
            <dd>{{ user.email }}</dd>
          </template>
          <template v-if="user.hireable">
            <dt>Hirable</dt>
            <dd>{{ user.hireable }}</dd>
          </template>
          <template v-if="user.bio">
            <dt>Bio</dt>
            <dd>{{ user.bio }}</dd>
          </template>
        </dl>
        <time :datetime="user.created_at">
          Signup date: {{ user.created_at | humanDateFormat }}
        </time>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { User } from '@/types';

export default Vue.extend({
  props: {
    user: {
      required: true,
      type: Object as PropType<User>,
    },
  },
});
</script>
