const express=require('express');
const app=express();
const cors=require('cors')
require('./Database/config')
const user=require('./Database/user')
const blog=require('./Database/blog')

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/signup',async(req,res)=>{
    if(req.body.name && req.body.password && req.body.email){
        let result=new user(req.body);
        result=await result.save();
        result = result.toObject()
        delete result.password
        res.send(result);
    }else{
        res.send(JSON.stringify({error:"all fields are required"}))
    }
})


app.post('/login',async(req,res)=>{

    if(req.body.email && req.body.password){
        let result=await user.findOne(req.body).select("-password");
        if(result){
            res.send(result);
        }else{
            res.send("credential not matched")
        }
    }else{
        res.send("credential not matched")
    }
})

app.post('/createBlog',async(req,res)=>{

    const blog=await blog.find(req.body);
    if(!blog) {
    let result=new blog(req.body);
    result=await result.save();
    res.send(result)
    }else{
        res.json({"user":"user already exits"})
    }
})

app.get('/blogs',async(req,res)=>{
    let result=await blog.find();
    res.send(result);
})

app.put('/blogs/:id',async(req,res)=>{
    let result=await blog.updateOne({
        _id:req.params.id},{$set:req.body});
        res.send(result)
})

app.delete('/blogs/:id',async(req,res)=>{
    let result=await blog.deleteOne({_id:req.params.id})
    res.send(result);
})
app.listen(5000,()=>{
    console.log("server is started");
})