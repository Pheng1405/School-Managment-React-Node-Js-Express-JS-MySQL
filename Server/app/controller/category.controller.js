const con  = require('../config/db.config');

const getOne = (req, res) => {
    var id = req.params.id;
    
    var sql = "SELECT * FROM `tbl_category` WHERE `id` = ?";

    con.query(sql, [id], (err, result) =>{
        if(!err){
            res.json({
                date : result
            });
        }
        else{
            res.json({
                data : err
            })
        }
    });
}

const getAll = (req, res) => {
    var sql = "SELECT * FROM `tbl_category`";

    con.query(sql, (err, result) =>{
        if(!err){
            res.json({
                date : result
            });
        }
        else{
            res.json({
                data : err
            })
        }
    });
}

const createCategory = (req, res) =>{
    var {name, image} = req.body;

    if(name == "" || name == null){
        res.json({
            message : "Name is required"
        });
    }
    else{
        var sql = "INSERT INTO `tbl_category`(`name`, `image`)" + 
             "VALUES (?,?)";
        con.query(sql, [name, image], (err, result) =>{
            if(!err){
                res.json({
                    message : "Success"
                });
            }
            else{
                res.json({
                    message : err
                });
            }
        });
    }
}

const editCategory = (req, res) =>{
    var id = req.params.id;

    var {name, image} = req.body;
    

    if(name == "" || name == null){
        message = "name us required";
    }
    else{
        message = ""; 
    }

    if(message == ""){
        var sql = "UPDATE `tbl_category` SET `name`= ? ,`image`=? WHERE `id` = ?";

        con.query(sql, [name, image, id], (err, result) =>{
            if(!err){
                res.json({
                    message : "edit success"
                });
            }
            else{
                res.json({
                    messsage : err
                });
            }
        });
    }
    else{
        res.json({
            message : "name us required"
        });
    }

}

const deleteCategory = (req, res) =>{

    var id = req.params.id;

    const sql = "DELETE FROM `tbl_category` WHERE `id` = ?";

    con.query(sql, [id], (err, result)=>{
        if(result.affectedRows > 0){
            res.json({
                message : "Delete successul...!"
            });
        }
        else{
            res.json({
                message : "error"
            })
        }
    })

}

module.exports = {getOne, getAll, deleteCategory, editCategory, createCategory};
