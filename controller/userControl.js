var userControl={};
var userDao=require('../dao/userDao');
var userLang = require('../lang/userLang');
let common = require("../common")
userControl.getUserInfo=function(app){
 app.get('/get-alluser',function(req,res){
	  res.status(200),
	  res.json(common.grads)
  })
}
userControl.getTset=function(app){
 app.get('/get-test',function(req,res){
 	userDao.test().then(function(value){
      res.status(200),
	  res.json(value)
 	});
  })
}
userControl.register = function (app) {
  app.get('/add-user',function(req,res){
  	let user = req.query
  	userDao.register().then(function(value){
      res.status(200),
      res.json(userLang.REGISTSUCCESS)
  	})
  	console.log(req.query)
    // userDao.addUser().then(function(value){
    //   res.status(200),
    //   res.json()
    // })
  })
}
module.exports=userControl