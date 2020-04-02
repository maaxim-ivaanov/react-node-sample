const stripe = require('stripe');

const CommentController = require('./controllers/comment');
const MainSettings = require('./config/main');

const multer = require('multer');

// storage needed for saving images from forms
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './public/uploads');
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  }
});

const express = require('express');
const passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  const apiRoutes = express.Router();

  //= ========================
  // Comment Routes
  //= ========================
  apiRoutes.get('/getComments/:slug', CommentController.getComments);
  apiRoutes.post('/addComment', CommentController.addComment);
  apiRoutes.post('/updateComment', CommentController.updateComment);
  apiRoutes.post('/deleteComment', CommentController.deleteComment);
  apiRoutes.post('/likeComment', CommentController.likeComment);
  apiRoutes.post('/dislikeComment', CommentController.dislikeComment);
  // Set url for API group routes
  app.use('/', apiRoutes);
};
