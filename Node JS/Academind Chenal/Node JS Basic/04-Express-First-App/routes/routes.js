var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express _2' });
});

/* GET users page. */
router.get('/users', function(req, res, next) {
    res.render('users', { title: 'Users' });
  });

module.exports = router;