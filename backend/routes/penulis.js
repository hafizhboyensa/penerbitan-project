import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// penulis saja (kalau admin juga boleh: authorize('penulis', 'admin'))
router.get('/dashboard', protect, authorize('penulis'), (req, res) => {
    res.json({ message: `Halo penulis ${req.user.nama_lengkap}` });
});

export default router;