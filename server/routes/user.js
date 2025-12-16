import express from 'express';
import { getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', getUser);

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   if (!mongoose.isValidObjectId(id)) {
     return res.status(400).json({ error: 'Invalid ID format' });
   }
   const user = await User.findById(id);
   if (!user) return res.status(404).json({ error: 'User not found' });
   res.json(user);
 });

export default router;
