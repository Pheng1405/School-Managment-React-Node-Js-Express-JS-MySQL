const student = (app) =>{
   
    const {getOne, getAll, createStudent, removeStudent, editStudent} = require("../controller/student.controller");

    app.get("/api/student", getAll);
    app.get("/api/student/:id", getOne);
    app.post("/api/student", createStudent);
    app.put("/api/student/:id", editStudent);
    app.delete("/api/student/:id", removeStudent);
}

module.exports = student;