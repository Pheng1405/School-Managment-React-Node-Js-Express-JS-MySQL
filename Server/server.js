const multer = require("multer");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));
const port = process.env.PORT || 8080;
app.listen(port, ()=>{ 
    console.log("Sever is listening on port " + port);
})

app.get("/", (req, res) =>{
    res.end("Home");
});

const storage = multer.diskStorage({
    destination : (req, res, callback) =>{
        callback(null, './public/');
    },
    filename : (req, res) => {
        // check file extenstion
        if(!res.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error('please upload an image'));
        }
        callback(null, res.originalname);
    }
});

const upload = multer({
    storage : storage,
    limit : {
        fieldSize  : 1024*1024*3
    }
});

app.post("/uploads", upload.array("fileupload"), (req,res)=>{
    console.log(req.file);
    res.send(req.file);
});



// import
require("./app/route/teacher.route")(app);
require("./app/route/student.route")(app);
require("./app/route/customer.route")(app);
require("./app/route/category.route")(app);
// require("./app/route/course.route")(app);
require("./app/route/auth.route")(app);