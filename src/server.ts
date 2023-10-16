import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { PORT } from '@/config';
import fs from 'fs';

export const app = express();

app.use(cors());

app.use(helmet());

app.get('/user', (req, res) => {
  res.send({ name: 'John Doe', email: 'johndoe@gmail.com', team: 'Yellow Mosquitos' });
});
app.get('/rules', (req, res) => {
  var data = fs.readFileSync('/home/tanzeel/Videos/SLU/f3a-express/src/resource/rules.txt', 'utf8');
  let arr = new Array();
  data.split("/n").forEach(val => {
    arr.push(val)
  })

  res.json(arr);
});

// if (import.meta.env.PROD) app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
});