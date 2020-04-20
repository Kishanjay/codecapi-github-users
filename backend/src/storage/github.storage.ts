import { GithubUser, GithubRepository } from '@/types';
import storageClient from './client/memory.client';

export default {
  setUsers(searchQuery: string, users: GithubUser[]): Promise<void> {
    return storageClient.setAsync(`users-${searchQuery}`, JSON.stringify(users));
  },
  async getUsers(searchQuery: string): Promise<GithubUser[] | null> {
    const usersString = await storageClient.getAsync(`users-${searchQuery}`);
    return JSON.parse(usersString);
  },
  setUser(userId: string, user: GithubUser): Promise<void> {
    return storageClient.setAsync(`user-${userId}`, JSON.stringify(user));
  },
  async getUser(userId: string): Promise<GithubUser | null> {
    const userString = await storageClient.getAsync(`user-${userId}`);
    return JSON.parse(userString);
  },
  setUserRepositories(userId: string, userRepositories: GithubRepository[]): Promise<void> {
    return storageClient.setAsync(`userRepositories-${userId}`, JSON.stringify(userRepositories));
  },
  async getUserRepositories(userId: string): Promise<GithubRepository[]> {
    const userRepositoriesString = await storageClient.getAsync(`userRepositories-${userId}`);
    return JSON.parse(userRepositoriesString);
  },
  setUserFollowers(userId: string, userRepositories: GithubUser[]): Promise<void> {
    return storageClient.setAsync(`userFollowers-${userId}`, JSON.stringify(userRepositories));
  },
  async getUserFollowers(userId: string): Promise<GithubUser[]> {
    const userRepositoriesString = await storageClient.getAsync(`userFollowers-${userId}`);
    return JSON.parse(userRepositoriesString);
  },
};
