const { check, validationResult } = require('express-validator');

const validateEducation = () => {
  return [
    check('school', 'School is required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty(),
    check('fieldofstudy', 'Field of study  is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty(),
  ];
};
module.exports = {
  validateEducation,
};
