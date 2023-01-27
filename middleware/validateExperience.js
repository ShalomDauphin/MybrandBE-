const { check } = require('express-validator');

const validateExperience = () => {
  return [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
  ];
};
module.exports = {
  validateExperience,
};
