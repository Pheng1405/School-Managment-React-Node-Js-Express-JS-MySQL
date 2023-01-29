const Category = (app) =>{
    const {getAll, getOne, createCategory, deleteCategory, editCategory} = require("../controller/category.controller");
    
    app.get("/api/category", getAll);
    app.get("/api/category/:id", getOne);
    app.post("/api/category", createCategory);
    app.delete("/api/category/:id", deleteCategory);
    app.put("/api/category/:id", editCategory);
}

module.exports = Category;