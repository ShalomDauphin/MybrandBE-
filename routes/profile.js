const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const {
  getProfileMe,
  createProfile,
  getAllProfiles,
  getOneProfile,
  deleteProfile,
  createExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
} = require('../controller/profile');
const { validateProfile } = require('../middleware/validateProfile');
const { validateExperience } = require('../middleware/validateExperience');
const { validateEducation } = require('../middleware/validateEducation');

router.get('/me', auth, getProfileMe);
router.post('/', [auth, [validateProfile()]], createProfile);
router.get('/', getAllProfiles);
router.get('/user/:user_id', getOneProfile);
router.delete('/', auth, deleteProfile);
router.put('/experience', [auth, validateExperience()], createExperience);
router.delete('/experience/:exp_id', auth, deleteExperience);
router.put('/education', [auth, [validateEducation()]], addEducation);
router.delete('/education/:edu_id', auth, deleteEducation);

module.exports = router;
