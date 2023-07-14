const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const passport = require('passport')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
    // router.get('/login', authController.getLogin)
    // router.post('/login', authController.postLogin)

// // @desc    Auth with Google
// // @route   GET /auth/google
// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// // @desc    Google auth callback
// // @route   GET /auth/google/callback
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         res.redirect('/dashboard')
//     }
// )

// @desc    Lougout user
// @route   /auth/logout
router.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });


router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router