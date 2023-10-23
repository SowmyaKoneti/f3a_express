import fs from 'fs';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import type { QueryResult } from 'pg';
import { PORT } from '@/config';
// import * as db from '@/db';

export const app = express();

app.use(cors());

app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.json());

// app.get('/games', async (req, res) => {
//   const result: QueryResult = await db.query('SELECT * FROM games');
//   res.send(result.rows[0]);
// });

// app.post('/games', async (req, res) => {
//   const { team1Name, team2Name, team1Score, team2Score } = req.body;
//   const query =
//     'INSERT INTO games (team_1_id, team_2_id, team_1_score, team_2_score) VALUES ($1, $2, $3, $4) RETURNING *';
//   const values = [team1Name, team2Name, team1Score, team2Score];
//   const result = await db.query(query, values);
//   res.send(result.rows[0]);
// });

app.get('/rules', (req, res) => {
  const data = fs.readFileSync(`${process.cwd()}/src/resource/rules.txt`, 'utf8');
  const arr: string[] = [];
  data.split('/n').forEach(val => {
    arr.push(val);
  });

  res.json(arr);
});

// if (import.meta.env.PROD) app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
