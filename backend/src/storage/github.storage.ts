import { GithubUser } from '@/types';
import storageClient from './client/redis.client';

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
};
