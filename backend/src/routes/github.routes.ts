import githubController from '../controller/github.controller';

import express = require('express');
const router = express.Router();


router.get('/users', githubController.getUsers);

export default router;