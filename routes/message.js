var models = require('../models');

exports.send = function(req, res) {
   console.log(req.body);
   
   var newMessage = new models.Message({
      "email": req.body.email,
      "content": req.body.content,
      "created": new Date()
   });

   newMessage.save(afterSave);

   function afterSave(err) {
      if(err) {
         console.log(err);
         res.send(500);
      }
   
      res.redirect('/');
   }
};
