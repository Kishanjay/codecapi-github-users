import 'module-alias/register';

import logger from '@/logger';
import githubRoutes from '@/routes/github.routes';
import express = require('express');
import cors = require('cors');

const port = Number(process.env.PORT || 3000);

const app = express();

app.use(cors());

app.get('/', (_req, res) => res.send({ alive: true }));
app.use('/github', githubRoutes);

app.listen(port, () => {
  logger.verbose(`Server listening on port ${port}!`);
});
