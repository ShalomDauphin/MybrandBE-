const { check, validationResult } = require('express-validator');

const validateProfile = () => {
  return [
    check('status', 'status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty(),
  ];
};
module.exports = {
  validateProfile,
};
