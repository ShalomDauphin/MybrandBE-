const { check, validationResult } = require('express-validator');

const userValidationRUles = () => {
  return [
    check('name', 'Name is required').not().isEmpty(),
    check('email', ' please include a valid Email').isEmail(),
    check(
      'password',
      'Please enter a Password with 6 or more character'
    ).isLength({ min: 6 }),
  ];
};
module.exports = {
  userValidationRUles,
};
