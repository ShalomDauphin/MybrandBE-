const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator');

const User = require('../model/User');
dotenv.config({ path: './config/config.env' });

//@route    POST api/Users
//@desc     Register User
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', ' please include a valid Email').isEmail(),
    check(
      'password',
      'Please enter a Password with 6 or more character'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //See if the user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'User already exists',
            },
          ],
        });
      }
      //Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //Encrypt the password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();
      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
