import githubService from '@/service/github.service';
import express = require('express');

export default {
  async listUsers(req: express.Request, res: express.Response) {
    const searchQuery = req.query.search as string;
    const users = await githubService.listUsers(searchQuery);
    res.send({ users });
  },

  async getUser(req: express.Request, res: express.Response) {
    const { username } = req.params;
    const user = await githubService.getUser({ username });

    if (!user) {
      res.sendStatus(404);
      return;
    }
    res.send({ user });
  },
};
