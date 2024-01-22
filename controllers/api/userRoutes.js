const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    // Create new user based on the req object (must match user model).
    const userData = await User.create(req.body);
    // Create a new session and add user id as well as logged in status to the response object. 
    // Express-session middleware automatically sets the connect.sid cookie in the user's browser. 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // Send back the user data
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;