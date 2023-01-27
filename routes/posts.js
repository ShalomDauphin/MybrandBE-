const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const {
  createPost,
  getAllPosts,
  getOnePost,
  deletePost,
  unlikePost,
  likePost,
  commentPost,
} = require('../controller/posts');

const checkObjectId = require('../middleware/checkObjectId');

router.post(
  '/',
  auth,
  check('text', 'Text is required').notEmpty(),
  createPost
);

router.get('/', auth, getAllPosts);
router.get('/:id', auth, checkObjectId('id'), getOnePost);
router.delete('/:id', [auth, checkObjectId('id')], deletePost);
router.put('/like/:id', auth, checkObjectId('id'), likePost);
router.put('/unlike/:id', auth, checkObjectId('id'), unlikePost);
router.post(
  '/comment/:id',
  auth,
  checkObjectId('id'),
  check('text', 'Text is required').notEmpty(),
  commentPost
);
router.delete('/comment/:id/:comment_id', auth, deleteComment);

module.exports = router;
