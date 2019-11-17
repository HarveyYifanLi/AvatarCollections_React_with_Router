var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/avatars");

router.route('/')
 .get(helpers.getAvatars)
 .post(helpers.createAvatar)
 
router.route('/:avatarId')
  .get(helpers.getAvatar)
  .put(helpers.updateAvatar)
  .delete(helpers.deleteAvatar)
  
module.exports = router;