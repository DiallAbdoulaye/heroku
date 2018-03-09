var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
require('dotenv').config()
const db = require('../db/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.user.sync().then(() => {
    db
      .user
      .create({
        firstName: 'Mat',
        lastName: 'Thomas',
        email: "toto@gmail.com"
      })
      .then(user => {
        res.json({user: user})
      })
  })
});

module.exports = router;
