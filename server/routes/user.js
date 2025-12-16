import express from 'express';
import { getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', getUser);

router.post('/create', async (req, res) => {
   const user = new User(req.body);
   await user.save();
   res.json(user);
 });


export default router;
