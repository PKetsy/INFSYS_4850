const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function requireAuth(req, res, next) {
  try {
    // Read the token off cookies
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration for token
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decoded sub (user_id)
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // Attach user to request in order to access it off controller function
    req.user = user;

    // Continue
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;
