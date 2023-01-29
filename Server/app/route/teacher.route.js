const Teacher = (app) =>{
    const {getAllTeacher, getTeacher, createTeacher, removeTeacher, editTeacher} = require("../controller/teacher.controller")
    app.get("/api/teacher", getAllTeacher);
    app.get("/api/teacher/:id", getTeacher);
    app.post("/api/teacher", createTeacher);
    app.put("/api/teacher/:id", editTeacher);
    app.delete("/api/teacher/:id",removeTeacher);
}

module.exports = Teacher;