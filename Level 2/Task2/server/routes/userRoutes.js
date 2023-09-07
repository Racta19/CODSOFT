import express from "express"
import User from "../models/User"
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'

const router = express.Router();

router.post("/register", async (req,res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
      expiresIn: '1h', // Token expiration time (adjust as needed)
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router