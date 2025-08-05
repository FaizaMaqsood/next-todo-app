// pages/api/users.js
import dbConnect from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const users = await User.find();
    return res.status(200).json(users);
  }

  if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      const user = await User.create({ name, email });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'User creation failed', error: error.message });
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
