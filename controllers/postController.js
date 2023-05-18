const { Post, User, Comment } = require('../models');

const postController = {
  async getPost(req, res) {
    try {
      const post = await Post.findByPk(req.params.id, {
        include: [User, { model: Comment, include: User }],
      });

      res.render('post', { post });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createPost(req, res) {
    try {
      res.redirect('/dashboard');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updatePost(req, res) {
    try {
      res.redirect('/dashboard');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deletePost(req, res) {
    try {
      res.redirect('/dashboard');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = postController;
