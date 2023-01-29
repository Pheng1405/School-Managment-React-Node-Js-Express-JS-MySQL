const con = require("../config/db.config");
const { empty } = require("../helper/custom");

const getAll = (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    // res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');

    const sql = "SELECT * FROM `tbl_student`";
    con.query(sql, (err, result)=>{
        if(!err){
            res.json({
                data : result
            });
        }
        else{
            res.json({
                err : true,
                message : err
            });
        }
    });

}

const getOne = (req, res)  =>{
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    // res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');

    let id = req.params.id;
    id = Number(id);
    const sql = `SELECT * FROM tbl_student WHERE id = ?`;
    con.query(sql,[id], (err, result)=>{
        if(!err){
            res.json({
                data : result
            });
        }
        else{
            res.json({
                err : true,
                message : err
            });
        }
    });
}

const createStudent = (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    // res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    let {first_name, last_name, gender, phone, email, thumbnail, description} = req.body;

    var message = [];

    if(empty(first_name)){
        message.firstname = "first name is required";
    }
    if(empty(last_name)){
        message.last_name = "last name is required";
    }
    if(empty(gender)){
        gender = 0;
    }

    if(Object.keys(message).length > 0){
        res.json({
            message : Object.values(message)
        });
    }
    else{
        const sql = "INSERT INTO `tbl_student`(`first_name`, `last_name`, `gender`, `phone`, `email`, `thumbnail`, `description`) VALUES (?,?,?,?,?,?,?)";
        
        con.query(sql, [first_name, last_name, gender, phone, email, thumbnail, description], (err, result)=>{
            if(!err){
                res.json({
                    message : "success"
                });
            }
            else{
                res.json({
                    error : true,
                    message : err
                });
            }
        })
    }
    
    

}

const removeStudent = (req, res) => {
    
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    // res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    const id = req.params.id;

    const sql = "DELETE FROM tbl_student WHERE id = ?";

    con.query(sql, [id], (err, result)=>{
        if(!err){
            res.json({
                message : "success"
            });
        }
        else{
            res.json({
                error : true,
                message : err
            });
        }
    });
}

const editStudent = (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    // res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    let id = req.params.id;

    let {first_name, last_name, gender, phone, email, thumbnail, description,status} = req.body;

    var message = [];

    if(empty(first_name)){
        message.firstname = "first name is required";
    }
    if(empty(last_name)){
        message.last_name = "last name is required";
    }
    if(empty(gender)){
        gender = 0;
    }

    if(Object.keys(message).length > 0){
        res.json({
            message : Object.values(message)
        });
    }
    else{
        const sql = "UPDATE `tbl_student` SET `first_name`=?,`last_name`=?,`gender`=?,`phone`=?,`email`=?,`thumbnail`=?,`description`=?, `status`=? WHERE id = ?";
        
        con.query(sql, [first_name, last_name, gender, phone, email, thumbnail, description,status, id], (err, result)=>{
            if(!err){
                res.json({
                    message : "success"
                });
            }
            else{
                res.json({
                    error : true,
                    message : err
                });
            }
        })
    }
    
}

module.exports = {
    getAll,
    getOne,
    createStudent,
    removeStudent,
    editStudent
}