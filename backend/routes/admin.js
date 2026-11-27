import express from 'express';
import pool from '../config/db.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Semua route di file ini hanya untuk admin
router.use(protect, authorize('admin'));

router.get('/users', async (req, res) => {
  const result = await pool.query('SELECT id_pengguna, nama_lengkap, email, no_kontak, role FROM pengguna ORDER BY id_pengguna');
  res.json(result.rows);
});

export default router;