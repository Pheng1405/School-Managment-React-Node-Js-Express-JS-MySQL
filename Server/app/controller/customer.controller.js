const con = require("../config/db.config");

const getAllCustomer = (req, res) =>{
    var sql = "SELECT * FROM tbl_customer"

    con.query(sql, (err, result, field) =>{
        if(err){
            throw err
        }
        else{
            res.json({
                customer : result
            })
        }
    })

    con.end()

}
const getCustomer = (req, res) =>{
    var id = req.params.id;
    var sql = "SELECT * FROM tbl_customer WHERE id = ?";
    con.query(sql,[id],(err, result) => {
        if(!err){
            res.json({
                customer : result
            })
        }
        else{
            throw err
        }
    })
}

//(`id`, `name`, `gender`, `age`, `phone`) 
const createCustomer = (req, res) =>{
    var body = req.body
    var message = "";
    

    var {name, gender, phone, age} = req.body

    if(name == "" || name == null){
        message = "Username cant be null";
    }
    else if(gender == "" || gender == null){
        message = "Gender cant be null";
    }
    else if(age == "" || age == null){
        message = "age cant be null"
    }
    else if(phone == "" || phone == null){
        message = "phone cant be null"
    }


    if(message != ""){
        res.json({
            err : true,
            message : message
        })
    }
    else{
        var sql = "INSERT INTO `tbl_customer`(`name`, `gender`, `age`, `phone`) VALUES (?,?,?,?)"
        con.query(sql, [name, gender, age,phone], (err, result, field)=>{
            if(!err){
                res.json({
                    msg : "Insert Success",
                    result : result,
                })
            }
            else{
                res.json({
                    msg_err : err
                })
            }
        })    
    }
}

const removeCustomer = (req, res) =>{
    var id = req.params.id;
    
    if(id == null || id == ""){
        res.json({
            msg : "id is require"
        })
    }
    else{
        var sql = "DELETE FROM `tbl_customer` WHERE id = ?";

        con.query(sql, [id], (err, result) => {
            if(!err){
                res.json({
                    msg : "Delete success",
                    result :result
                })
            }
            
        })

    }
}


module.exports = {
    getAllCustomer,
    getCustomer,
    createCustomer,
    removeCustomer
}