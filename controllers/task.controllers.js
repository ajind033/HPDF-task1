  var request = require('ajax-request');


  /* used for task 2*/
  exports.authors = (req,res)=>{

    request({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET'
    }, function(err, res1, body1) {
      
      request({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
      }, function(err, res2, body2) {

       var users =JSON.parse(body1);
       var posts = JSON.parse(body2);
      var count;
      var result = "<table> <tr><th>Author's Name <th/>Count of post</tr>";
      for(var user in users){
           count= 0;
        for(var post in posts){

          if(users[user].id==posts[post].userId){
              count = count + 1;
          }
        }
        result = result +'<tr><td>'+  users[user].name+'</td><td align="center">'+ count+'</td></tr>';
      }
      result = result + '</table>';
      res.send(result);
          });
        });
  }

  /* used for task 3*/
exports.setCookie=(req,res)=>{
     // check if client sent cookie
   var cookie = req.cookies.Name ;
   var cookieAge = req.cookies.Age ;

   if (cookie === undefined)
   { 
     res.cookie('Name',"Akash", { maxAge: 1000*60*5});
    res.cookie('Age',"21", { maxAge: 1000*60*5});
     res.send('cookie created successfully');
   } 
   else
   {
     // yes, cookie was already present 
     res.send('cookie exists => { "Name" : "'+ cookie +'", "Age" : "'+ cookieAge +'"}');
   } 
};

/* used for task 7*/
exports.printInput=(req,res)=>{
    var input = { 
        Name : req.body.name1,
        Age : req.body.age
    };
    console.log(JSON.stringify(input));
    res.send(JSON.stringify(input));
};