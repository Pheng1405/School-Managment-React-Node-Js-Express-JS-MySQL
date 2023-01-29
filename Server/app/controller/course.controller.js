// const con = require("../config/db.config");

// const createCourse = (req, res) =>{
//     const {category_id, name, price, description} = req.body;

//     let message = '';

//     if(category_id == '' || category_id == null){
//         message = "category id is required";
//     }
//     else if(name == '' || name == null){
//         message = "name is required";
//     }
//     else if(price == '' || price == null){
//         message = "price is required";
//     }

//     if(message == ""){
//         const sql = "INSERT INTO `tbl_course`(`category_id`, `name`, `full_price`, `description`) VALUES (?,?,?,?)";
//         con.query(sql, [category_id, name, price,description], (err,result)=>{
//             if(!err){
//                 res.json({
//                     message : "insert success"
//                 });
//             }
//             else{
//                 res.json({
//                     message : err
//                 });
//             }
//         })
//     }
//     else{
//         res.json({
//             message : message
//         });
//     }
// }

// const getOne = (req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     const id = req.params.id;

//     const sql = "SELECT course.id as id, course.name as course_name, category.name as course_type, course.full_price as price, course.id as related_category_id FROM `tbl_category` as category INNER JOIN `tbl_course` as course ON category.id = course.id  AND course.id = ?";
//     con.query(sql, [id], (err, result)=>{
//         if(!err){
//             var course_detail = result;

//             course_detail = JSON.stringify(course_detail);
//             course_detail = JSON.parse(course_detail);
            
//             const related_id = course_detail[0].related_category_id;

//             const sql_relate = "SELECT * FROM `tbl_course` WHERE `category_id` = ? ORDER BY `course_id` DESC LIMIT 5";
            
//             con.query(sql_relate,[related_id], (err, result)=>{
//                 course_detail = {...course_detail};
//                 course_detail = course_detail[0];

               
//                 result = JSON.stringify(result);
//                 result = JSON.parse(result);
//                 course_detail = {...course_detail, related_course  : result}
                

//                 res.json({
//                     data : course_detail
//                 })
                
//             });

            
//         }
//         else{
//             res.json({
//                 message : err
//             });
//         }
//     });
// }

// const getAll = (req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    
//     const sql = "SELECT course.course_id as id, course.name as course_name, category.name as course_type, course.full_price as price FROM `tbl_category` as category INNER JOIN `tbl_course` as course ON category.category_id = course.category_id";
//     con.query(sql, (err, result)=>{
//         if(!err){
//             res.json({
//                 data : result
//             })

//             // res.json({
//             //     data : result
//             // });
//         }
//         else{
//             res.json({
//                 message : err
//             });
//         }
//     });
// }

// const editCourse = (req, res) =>{
//     const id = req.params.id;
//     const {category_id, name, price, description} = req.body;

//     let message = '';

//     if(id == '' || id == null){
//         message = "error";
//     }

//     if(category_id == '' || category_id == null){
//         message = "category id is required";
//     }
//     else if(name == '' || name == null){
//         message = "name is required";
//     }
//     else if(price == '' || price == null){
//         message = "price is required";
//     }

//     if(message == "" || message == null){
//         const sql = "UPDATE `tbl_course` SET `category_id`=?,`name`=?,`full_price`=?,`description`=? WHERE `course_id` = ?";
//         con.query(sql, [category_id, name, price, description, id], (err, result)=>{
//             if(!err){
//                 res.json({
//                     message : "edit success"
//                 });
//             }
//             else{
//                 res.json({
//                     message : err
//                 });
//             }
//         });
//     }
//     else{
//         res.json({
//             message : message
//         });
//     }
    

// }

// const deleteCourse = (req, res) => {
//     const id = req.params.id;

//     const sql = "DELETE FROM `tbl_course` WHERE `course_id` = ?";
//     con.query(sql, [id], (err, result)=>{
//         if(result.affectedRows > 0){
//             res.json({
//                 message : "delete success"
//             });
//         }
//         else{
//             res.json({
//                 message : "Error"
//             });
//         }
//     });
// }


// module.exports = {getAll, getOne, editCourse, deleteCourse, createCourse};
