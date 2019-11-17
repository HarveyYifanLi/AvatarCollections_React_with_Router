var db = require('../models');

exports.getAvatars = function(req, res){
    db.Avatar.find()
    .then(function(avatars){
        res.json(avatars);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createAvatar = function(req, res){
  db.Avatar.create(req.body)
  .then(function(newAvatar){
      res.status(201).json(newAvatar);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getAvatar = function(req, res){
   db.Avatar.findById(req.params.avatarId)
   .then(function(foundAvatar){
       res.json(foundAvatar);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateAvatar =  function(req, res){
   db.Avatar.findOneAndUpdate({_id: req.params.avatarId}, req.body, {new: true})
   .then(function(avatar){
       res.json(avatar);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteAvatar = function(req, res){
   db.Avatar.remove({_id: req.params.avatarId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;