const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function signup(req, res) {
  try {
    // Get email and password off req body
    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create a admin user with the data
    await User.create({ email, password: hashedPassword });

    // Respond
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    // 400 generic error code.
    res.sendStatus(400);
  }
}

async function login(req, res) {
  try {
    // Get email and password off of req body
    const { email, password } = req.body;

    // Find user with the requested email
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(401);

    // Compare sent in password with found user(password hashed)
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401);

    // Create JWT Token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);
    // Send JWT out - datatracker.ietf.org/doc/html/rfc7519#section-4.1

    // needs to be sent in HTTP cookie for security -- github.com/jshttp/cookie
    res.cookie('Authorization', token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    // Send it
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function logout(req, res) {
  try {
    res.cookie('Authorization', '', { expires: new Date() });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function checkAuth(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};
