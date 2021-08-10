const expres=require('express');
const app=expres();
//const bodyParser = require('body-parser');
const bodyps=require('body-parser');
//app.use(expres.json());
//const f=app.use(expres.urlencoded({extended:false}))
const json=bodyps.json();
const ue=bodyps.urlencoded({extended:false})

app.post('/login',ue,function(req,res){
    res.send("welcom"+req.body.username)
})
app.join('/newp',(req,res,next)=>{
    res.sendfile(path.join(__dirname,'../','view','/newp.html'));
})
app.post('login/user',json,(req,res)=>console.log("this is json data"))

app.use(bodyps.urlencoded);
app.use('/addProduct',(req,res,next)=>{
    res.send('<form action="/result method="post"><input name="name"><input name="age"><button type="submit">submit</button></form>');
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


app.set('port',process.env.port||3000);
const port=app.get('port');
app.use((req,res,next)=>{
    console.log("app is running");
    next();
})
app.listen(port,()=>console.log('Your server is runing '+port));
