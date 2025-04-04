// // backend/controllers/authController.js
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Login controller function
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });

//     // Send response with token
//     res.json({ message: 'Login successful', token });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Export the controller functions
// module.exports = { signup, login };
