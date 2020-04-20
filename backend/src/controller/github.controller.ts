import githubService from '@/service/github.service';
import express = require('express');

export default {
  async listUsers(req: express.Request, res: express.Response): Promise<void> {
    const searchQuery = req.query.username as string;
    const users = await githubService.listUsersByUsername(searchQuery);
    res.send(users);
  },

  async getUser(req: express.Request, res: express.Response): Promise<void> {
    const { username } = req.params;
    const user = await githubService.getUser({ username });

    if (!user) {
      res.status(404).send();
      return;
    }
    res.send(user);
  },

  async getUserRepositories(req: express.Request, res: express.Response): Promise<void> {
    const { username } = req.params;
    const user = await githubService.getUserRepositories({ username });

    if (!user) {
      res.status(404).send();
      return;
    }
    res.send(user);
  },

  async getUserFollowers(req: express.Request, res: express.Response): Promise<void> {
    const { username } = req.params;
    const user = await githubService.getUserFollowers({ username });

    if (!user) {
      res.status(404).send();
      return;
    }
    res.send(user);
  },
};
