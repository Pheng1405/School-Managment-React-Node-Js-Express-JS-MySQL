const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.end("index")
})

app.get("/about", (req, res) =>{
    res.end("about page")
})

app.get("/api/teacher", (req, res) =>{
    var arr_teacher = [
        {
            id : 1,
            name : "Pheng",
            salary : 300,
            email : 'phengg1405@gmail.com',
            exp : 2
        },
        {
            id : 2,
            name : "Chheanf",
            salary : 550,
            email : 'chheang@gmail.com',
            exp : 2
        },
        {
            id : 3,
            name : "Phea",
            salary : 500,
            email : 'phea234@gmail.com',
            exp : 4
        }
    ];
    var data = {
        teacher : arr_teacher
    }
    res.json(arr_teacher);
})

app.listen(8080, ()=>{
    console.log("Sever listening to localhost port 8080");
})
