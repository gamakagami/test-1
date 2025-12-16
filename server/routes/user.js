import express from 'express';
import { getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', getUser);

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ deleted: true });
 });

export default router;
