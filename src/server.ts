import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { PORT } from '@/config';
import * as db from '@/db';

export const app = express();

app.use(cors());

app.use(helmet());

app.get('/user', async (req, res) => {
  res.send(await db.query('SELECT * FROM games'));
});

if (import.meta.env.PROD) app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
