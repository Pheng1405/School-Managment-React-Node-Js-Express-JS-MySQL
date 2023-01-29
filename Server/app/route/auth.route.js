const Auth = (app) =>{
    const {createUser, Login, changeStatusUser} = require('../controller/auth.controller');

    app.post("/api/auth/login", Login);
    app.post("/api/auth/register", createUser);
    app.post("/api/auth/edit", changeStatusUser);
}

module.exports = Auth;