import { GithubUser, GithubRepository } from '@/types';
import axios from 'axios';
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

  getUserRepositoriesByUrl(url: string): Promise<GithubRepository[]> {
    return axios.request({
      url,
      method: 'GET',
    }).then(({ data }: {data: GithubRepository[]}) => data);
  },

  getUserFollowersByUrl(url: string): Promise<GithubUser[]> {
    return axios.request({
      url,
      method: 'GET',
    }).then(({ data }: {data: GithubUser[]}) => data);
  },
};
