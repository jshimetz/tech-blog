const { Post, User } = require('../models');

const homeController = {
  async getHomepage(req, res) {
    try {
      const posts = await Post.findAll({
        include: User,
        order: [['createdAt', 'DESC']],
      });

      res.render('home', { posts });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = homeController;
