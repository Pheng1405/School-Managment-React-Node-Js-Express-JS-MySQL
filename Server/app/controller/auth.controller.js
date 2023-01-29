const con = require("../config/db.config");
const bcrypt = require('bcrypt');
const createUser = (req, res) =>{
    let {username, password, email, tel} = req.body;
    var message = [];

    if(username == "" || username == null){
        message.username = "username is required";
    }
    if(password == "" || password == null){
        message.password = "password is required";
    }
    else if(password.length<6 || password.length >= 24){
        message.length = password.length;
        message.password = "password must be 6-24 long characters";
    }

    if(!(Object.keys(message).length > 0)){

        sqlCheckUser = "SELECT COUNT(user_id) as count_user FROM `tbl_user` WHERE `username` = ? or `email` = ?";
        con.query(sqlCheckUser, [username, email], (err, result)=>{
            if(!err){
                if(!(result[0].count_user > 0)){
                    password = bcrypt.hashSync(password,10);
                    sql = "INSERT INTO `tbl_user`(`username`, `password`, `tel`, `email`) VALUES (?,?,?,?)";
                    con.query(sql, [username, password, tel, email], (err, result)=>{
                        if(!err){
                            res.json({
                               message : "Insert Success" 
                            });
                        }
                        else{
                            res.json({
                                message : "error"
                            });
                        }
                    });
                }
                else{
                    res.send("Error");
                }
            }
            else{
                res.send("err");
            }
        })
            

        
        

    }
    else{
        res.json({
            message : "error"
        });
    }
    console.log(message);
}

const changeStatusUser = (req, res) =>{
    const user_id = req.body && req.body.user_id;
    const status  = req.body && req.body.status;
    if(user_id == null || user_id == ''){
        res.send("user id is required..!");
    }
    else{
        const sql = "UPDATE `tbl_user` SET `status`=? WHERE `user_id`=?"; 
        con.query(sql, [status, user_id], (err, result) =>{
            if(!err){
                res.json({
                    message : result
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

const Login = (req, res) =>{
    let {username, email, pass} = req.body;

    var message = {};
    if((username == null  && email == null) || (username == "" && email == "" )){
        message.username = "please fill username or email";
    }
    if(pass == null){
        message.pass = "Please fill password";
    }
    
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        });
    }
    else{
        sql = "SELECT * FROM tbl_user WHERE username = ?";
        con.query(sql, [username], (err, result) =>{
            if(!err){
                const dbPassword = result[0].password;
                pass = String(pass);

                if(bcrypt.compareSync(pass, dbPassword)){
                    const data = result[0];
                    delete data.password;
                    res.json({
                        data : data
                    });
                }
                else{
                    res.send("Password doesn't match");
                }
            }
            else{
                res.json({
                    error   : true,
                    message : message
                });
            }
        })
    }

}

    // res.json({
    //     message : message
    // });


module.exports = {createUser, changeStatusUser, Login};