var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    layout: false
  });
});

router.get('/admin', function (req, res, next) {
  res.render('admin', {
    title: 'Express',
    layout: false
  });
});

router.get('/registration', function (req, res, next) {
  res.render('create_account', {
    title: 'Express',
    layout: false
  });
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', {
    title: 'Express',
  });
});

module.exports = router;