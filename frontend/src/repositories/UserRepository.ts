import { GithubUser, GithubRepository } from '@/types';
import Client from './clients/BackendClient';


export default {
  searchUsersByUsername(username: string): Promise<GithubUser[]> {
    return Client.request({
      method: 'GET',
      url: 'github/users',
      params: { username },
    }).then(({ data }: { data: GithubUser[] }) => data);
  },

  getUserByUsername(username: string): Promise<GithubUser | null> {
    return Client.request({
      method: 'GET',
      url: `github/users/${username}`,
    }).then(({ data }: { data: GithubUser | null }) => data);
  },

  getRepositoriesByUsername(username: string): Promise<GithubRepository[]> {
    return Client.request({
      method: 'GET',
      url: `github/users/${username}/repositories`,
    }).then(({ data }: { data: GithubRepository[] }) => data);
  },

  getFollowersByUsername(username: string): Promise<GithubUser[]> {
    return Client.request({
      method: 'GET',
      url: `github/users/${username}/followers`,
    }).then(({ data }: { data: GithubUser[] }) => data);
  },
};
