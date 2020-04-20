import githubController from '@/controller/github.controller';

import express = require('express');
const router = express.Router();


router.get('/users', githubController.listUsers);
router.get('/users/:username', githubController.getUser);
router.get('/users/:username/repositories', githubController.getUserRepositories);
router.get('/users/:username/followers', githubController.getUserFollowers);

export default router;
