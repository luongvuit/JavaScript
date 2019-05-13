var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user detail. */
router.get('/detail', function(req, res, next) {
  res.send('User Detail');
});

module.exports = router;
