'use strict';

module.exports = function(app) {
  app.get('/', function(req,res){
    console.log("im in root");
    res.render('pages/index'); 
  });

  app.get('/about', function(req,res){
    console.log("im in root");
   res.render('about'); 
  });
};
