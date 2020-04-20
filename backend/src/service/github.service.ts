import githubStorage from '@/storage/github.storage';
import githubRepository from '@/repository/github.repository';
import { GithubUser, GithubUserIdentifier } from '@/types';
import logger from '@/logger';

export default {
  async listUsers(searchQuery: string): Promise<GithubUser[]> {
    const cachedUsers = await githubStorage.getUsers(searchQuery);
    if (cachedUsers) {
      return cachedUsers;
    }

    const searchResult = await githubRepository.searchUsers(searchQuery);
    const users = searchResult.items;

    githubStorage.setUsers(searchQuery, users);
    return users;
  },
  async getUser({ username }: GithubUserIdentifier): Promise<GithubUser | null> {
    const cachedUser = await githubStorage.getUser(username);
    if (cachedUser) {
      return cachedUser;
    }

    let user;
    try {
      user = await githubRepository.getUserByUsername(username);
    } catch (e) {
      logger.silly(e);
      return null;
    }
    return user;
  },
};
