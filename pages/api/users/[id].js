// pages/api/users/[id].js
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await User.findByIdAndDelete(id);
      return res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      return res.status(500).json({ message: 'Delete failed', error: error.message });
    }
  }

  if (req.method === 'PUT') {
    const { name, email } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ message: 'Update failed', error: error.message });
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
