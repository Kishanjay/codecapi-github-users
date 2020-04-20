import { GithubUser, GithubRepository } from '@/types';
import Client, { SearchUserResponse } from './client/github.client';

export default {
  searchUsersByUsername(username: string): Promise<SearchUserResponse> {
    const params = { q: username };

    return Client.request({
      url: 'search/users',
      method: 'GET',
      params,
    }).then(({ data }: {data: SearchUserResponse}) => data);
  },

  getUserByUsername(username: string): Promise<GithubUser> {
    return Client.request({
      url: `users/${username}`,
      method: 'GET',
    }).then(({ data }: {data: GithubUser}) => data);
  },

  getUserRepositoriesByUsername(username: string): Promise<GithubRepository[]> {
    return Client.request({
      url: `users/${username}/repos`,
      method: 'GET',
    }).then(({ data }: {data: GithubRepository[]}) => data);
  },
};
