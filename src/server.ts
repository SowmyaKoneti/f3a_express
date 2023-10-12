import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { PORT } from '@/config';

export const app = express();

app.use(cors());

app.use(helmet());

app.get('/user', (req, res) => {
  res.send({ name: 'John Doe', email: 'johndoe@gmail.com', team: 'Yellow Mosquitos' });
});

if (import.meta.env.PROD) app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
