var express = require('express');
var router = express.Router();

const web3 = require("../web3");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
