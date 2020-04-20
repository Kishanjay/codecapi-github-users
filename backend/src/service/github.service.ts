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
      githubStorage.setUser(username, user);
    } catch (e) {
      logger.silly(e);
      return null;
    }
    return user;
  },
  async getUserRepositories({ username }: GithubUserIdentifier): Promise<GithubRepository[]> {
    const cachedUserRepositories = await githubStorage.getUserRepositories(username);
    if (cachedUserRepositories) {
      return cachedUserRepositories;
    }

    let user;
    try {
      user = await this.getUser({ username });
    } catch (e) {
      logger.warn(e);
    }
    if (!user || !('repos_url' in user)) {
      return [];
    }

    let userRepositories;
    try {
      userRepositories = await githubRepository.getUserRepositoriesByUrl(user.repos_url);
    } catch (e) {
      logger.silly(e);
      return [];
    }
    return userRepositories;
  },
  async getUserFollowers({ username }: GithubUserIdentifier): Promise<GithubUser[]> {
    const cachedUserFollowers = await githubStorage.getUserFollowers(username);
    if (cachedUserFollowers) {
      return cachedUserFollowers;
    }

    let user;
    try {
      user = await this.getUser({ username });
    } catch (e) {
      logger.warn(e);
    }
    if (!user || !('followers_url' in user)) {
      return [];
    }

    let userFollowers;
    try {
      userFollowers = await githubRepository.getUserFollowersByUrl(user.followers_url);
    } catch (e) {
      logger.silly(e);
      return [];
    }
    return userFollowers;
  },
};
