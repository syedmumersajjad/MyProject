var express=require('express');
var bodyparser=require('body-parser');
const cors = require('cors');
var {objectId}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {Users}=require('./models/users');


var app= express();
var port=  3000;
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'example.com');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// }
// app.configure(function() {
//     app.use(bodyparser.json);
//     app.use(allowCrossDomain);
// });
app.use(bodyparser.json(),(req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(bodyparser.json(),cors());
//app.options('*', cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
//app.use(bodyparser.json);
  
  
// creating a user

app.post('/createuser',(req,res)=>{
    console.log(req);
    var user= new Users({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
    });

    user.save().then((doc)=>{
res.send(doc);
    },(err)=>{
res.status(400).send(err);
    });
console.log(req.body);
});

app.get('/loginuser/:user_email',(req,res)=>{
    console.log(req.params.user_email);
    Users.find({
        user_email:req.params.user_email
    }).then((Users)=>{
        res.send({Users});
    },(err)=>{
        res.status(400).send(err);
    })
})

// app.get('/todos/:id',(req,res)=>{
//     var id = req.params.id;
// //res.send(id);
//     if(!objectId.isValid(req.params.id))
//     {
// return res.status(400).send('not id');
//     }
//     Todo.findById(id).then((todo)=>{
//         if(!todo){
//             return res.status(400).send();
//         }
//         res.send({todo});
//     }).catch((e)=>{
//         res.status(400).send(err);
//     })

// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// app.listen(3000,()=>{
//     console.log('listening'+app.listeners);

// });

