const con = require("../config/db.config");
const getAllTeacher = (req, res) =>{
    var sql = "SELECT * FROM `tbl_teacher`";

    con.query(sql, (err, result) => {
        if(!err){
            res.json({
                teacher : result
            })
        }
        else{
            res.json({
                err_data : err
            })
        }
    })
}

const getTeacher = (req, res) => {
    var id = req.params.id;
    var sql =  "SELECT * FROM `tbl_teacher` WHERE id = ?";

    con.query(sql, [id], (err, result) => {
        if(!err){
            res.json({
                teacher : result
            })
        }
        else{
            res.json({
                err_data : err
            })
        }
    })
}

const createTeacher = (req, res) => {
    const {first_name,last_name,email, gender, salary, thumbnail, description,phone} = req.body
    var message = ""

    if(first_name == "" || last_name == null){
        message = "first_name is reqiured";
    }
    if(last_name == "" || last_name == null){
        message = "last_name is reqiured";
    }
    else if(gender == "" || gender == null){
        message = "gender is reqiured";
    }
    else if(salary == "" || salary == null){
        message = "salary is reqiured";
    }
    
    if(message == ""){
        var sql = "INSERT INTO `tbl_teacher`(`first_name`, `last_name`, `gender`, `phone`, `email`, `salary`, `thumbnail`, `description`) VALUES (?,?,?,?,?,?,?,?)";
        
        con.query(sql, [first_name,last_name,gender,phone,email,salary,thumbnail, description], (err, result) => {
            if(!err){
                res.json({
                    respone : result
                })
            }
            else{
                res.json({
                    respone : err
                })
            }
        })
    }
    else{
        res.send("NO")
    }


}

const removeTeacher = (req, res) => {
    const id = req.params.id

    var sql = "DELETE FROM  `tbl_teacher` WHERE id = ?"

    con.query(sql, [id], (err, result)=>{
        if(!err){
            res.send("Delelte Success")
        }
        else{
            res.json({
                err : err
            })
        }
    })

}

const editTeacher = (req, res) =>{
    const id = req.params.id;
    const {first_name,last_name,email, gender, salary, thumbnail, description,phone} = req.body

    var message = ""

    if(first_name == "" || last_name == null){
        message = "first_name is reqiured";
    }
    if(last_name == "" || last_name == null){
        message = "last_name is reqiured";
    }
    else if(gender == "" || gender == null){
        message = "gender is reqiured";
    }
    else if(salary == "" || salary == null){
        message = "salary is reqiured";
    }


    if(message == ""){
        var sql = "UPDATE `tbl_teacher` SET `first_name`=?,`last_name`=?,`gender`=?,`phone`=?,`email`=?,`salary`=?,`thumbnail`=?,`description`=? WHERE `id` = ?";
        con.query(sql, [first_name,last_name,gender,phone,email,salary,thumbnail, description, id],  (err, result) => {
            if(!err){
                res.json({
                    teacher : result
                })
            }
            else{
                res.json({
                    err_data : err
                })
            }
        })
    }
    else{
        res.json({
            err : true,
            message : message
        })
    }
    


    
}


module.exports = {
    getAllTeacher, getTeacher,  createTeacher, removeTeacher, editTeacher
}