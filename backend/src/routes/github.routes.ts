import githubController from '@/controller/github.controller';

import express = require('express');
const router = express.Router();


router.get('/users', githubController.listUsers);
router.get('/users/:id', githubController.getUser);

export default router;