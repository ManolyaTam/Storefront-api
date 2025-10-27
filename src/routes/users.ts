import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from './db';
import { verifyToken } from '../middleware/auth';

const router = express.Router();
const saltRounds = 10;

router.get('/', verifyToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT id, firstName, lastName FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT id, firstName, lastName FROM users WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) return res.status(404).send('User not found');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.post('/', verifyToken, async (req, res) => {
  const { firstName, lastName, password } = req.body;
  if (!firstName || !lastName || !password)
    return res.status(400).send('Missing fields');

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const result = await pool.query(
      'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *',
      [firstName, lastName, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;
