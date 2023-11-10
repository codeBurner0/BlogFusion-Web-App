const express = require('express');
const app = express();
const cors = require('cors')
require('./Database/config')
const blog = require('./Database/blog')

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("welcome! to blogfusion")
})



app.post('/createBlog', async (req, res) => {
        let result = new blog(req.body);
        result = await result.save();
        console.log("done")
        res.send(result)
})

app.get('/blogs', async (req, res) => {
    let result = await blog.find();
    res.send(result);
})

app.put('/blogs/:id', async (req, res) => {
    let result = await blog.updateOne({
        _id: req.params.id
    }, { $set: req.body });
    res.send(result)
})

app.delete('/blogs/:id', async (req, res) => {
    let result = await blog.deleteOne({ _id: req.params.id })
    res.send(result);
})


app.listen(5000, () => {
    console.log("server is started");
})