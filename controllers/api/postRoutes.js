const router = require('express').Router();
const { Post } = require('../../models/');
const authenticate = require('../../utils/authenticate');


router.post('/', authenticate, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', authenticate, async (req, res) => {
    try {
      const [items] = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (items > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete('/:id', authenticate, async (req, res) => {
    try {
      const [deletedItems] = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (deletedItems > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;