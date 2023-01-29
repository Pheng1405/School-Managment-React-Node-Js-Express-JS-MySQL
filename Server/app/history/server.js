const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res) =>{
    res.end("index")
})

app.get("/api/teacher", (req, res) =>{
    var obj = {}
    obj.url = req.url
    obj.method = req.method
    obj.path = req.path
    obj.baseUrl = req.baseUrl
    obj.ip    = req.ip
    obj.host  = req.hostname
    obj.originalUrl = req.originalUrl

    console.log(obj)
    res.json(obj)
})

app.post("/api/teacher", (req, res) =>{
    var obj = {}
    obj.body = req.body
    obj.params = req.params

    res.json(obj)
})

app.put("/api/teacher", (req, res) =>{
    res.end("Hello put method")
})

app.delete("/api/teacher", (req, res) =>{
    res.end("Hello delete method")
})



const port = process.env.port || 8080;


app.listen(port, ()=>{
    console.log("Sever listening to localhost port ${port}");
})
