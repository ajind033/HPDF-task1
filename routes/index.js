var express = require('express');
var router = express.Router();
var taskCTRL = require('..//controllers/task.controllers.js');


/* task1 */
router.get('/', (req, res)=> {
  res.render('index');
});

/*task2*/
router.get('/authors',(req,res)=>{
return taskCTRL.authors(req,res);
});


/*task3*/
  router.get('/setcookie', function (req, res,next) {
  return taskCTRL.setCookie(req,res);
 });

 
 /*task4*/
router.get('/getcookies', function (req, res) {
res.send(req.cookies);
});


/* task 5 */
router.get('/robots.txt',(req,res)=>{
res.render('task5');
});

/*task 6a*/
router.get('/html',(req,res)=>{
  res.render("task6a");
  });

  /*task 6b*/
router.get('/image',(req,res)=>{
  res.render("task6b");
  });


/*task 7*/
router.get('/input',(req,res)=>{
  res.render("task7");
  });

/*to print the data of task 7 */
router.post('/stdout',(req,res)=>{
  return taskCTRL.printInput(req,res);
});
module.exports = router;
