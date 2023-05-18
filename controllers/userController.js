const { User } = require('../models');

const userController = {
  async signup(req, res) {
    try {
      res.redirect('/dashboard');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async login(req, res) {
    try {
      res.redirect('/dashboard');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async logout(req, res) {
    try {
      res.redirect('/');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = userController;
