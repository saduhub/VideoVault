const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      console.log("userRoutes working")
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;