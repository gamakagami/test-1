import express from 'express';
import { getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', getUser);

 router.post('/:id/favorite', auth, async (req, res) => {
   const post = await Post.findById(req.params.id);
   post.favorites.push(req.user.id);
   await post.save();
   res.json({ success: true });
 });

export default router;
