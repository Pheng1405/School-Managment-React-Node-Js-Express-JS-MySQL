const customer = (app) =>{
    const {getAllCustomer, getCustomer, createCustomer, removeCustomer} = require("../controller/customer.controller")

    app.get("/api/customer", getAllCustomer);
    app.get("/api/customer/:id", getCustomer);
    app.post("/api/customer", createCustomer);
    app.delete("/api/customer/:id", removeCustomer );

    
}

module.exports = customer