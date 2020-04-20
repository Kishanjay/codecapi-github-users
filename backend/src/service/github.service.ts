import githubStorage from '@/storage/github.storage';
import githubRepository from '@/repository/github.repository';
import { GithubUser, GithubUserIdentifier, GithubRepository } from '@/types';
import logger from '@/logger';

export default {
  async listUsersByUsername(username: string): Promise<GithubUser[]> {
    const cachedUsers = await githubStorage.getUsers(username);
    if (cachedUsers) {
      return cachedUsers;
    }

    let searchResult;
    try {
      searchResult = await githubRepository.searchUsersByUsername(username);
    } catch (e) {
      logger.warn(e);
      return [];
    }

    const users = searchResult.items;

    githubStorage.setUsers(username, users);
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
  async getUserRepositories({ username }: GithubUserIdentifier): Promise<GithubRepository[]> {
    const cachedUser = await githubStorage.getUserRepositories(username);
    if (cachedUser) {
      return cachedUser;
    }

    let user;
    try {
      user = await githubRepository.getUserRepositoriesByUsername(username);
    } catch (e) {
      logger.silly(e);
      return [];
    }
    return user;
  },
  async getUserFollowers({ username }: GithubUserIdentifier): Promise<GithubUser[]> {
    const cachedUser = await githubStorage.getUserFollowers(username);
    if (cachedUser) {
      return cachedUser;
    }

    let followers;
    try {
      followers = await githubRepository.getUserFollowersByUsername(username);
    } catch (e) {
      logger.silly(e);
      return [];
    }
    return followers;
  },
};
