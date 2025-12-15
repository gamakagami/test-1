import User from '../models/User.js';

export async function getUser(req, res) {
  const user = await User.findById(req.params.id).lean();
  res.json(user);
}
