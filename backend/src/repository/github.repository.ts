import { GithubUser } from '@/types';
import Client, { SearchUserResponse } from './client/github.client';

export default {
  searchUsers(searchQuery: string): Promise<SearchUserResponse> {
    const params = { q: searchQuery };

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
};
