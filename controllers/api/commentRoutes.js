const router = require('express').Router();
const { Comment } = require('../../models/');
const authenticate = require('../../utils/authenticate');

router.post('/', authenticate, async (req, res) => {
  try {
    const addComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(addComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;