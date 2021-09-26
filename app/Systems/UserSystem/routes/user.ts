export default (server: any) => {
    const usersRouters = require('./../Controllers/UserController');
    server.use("/user", usersRouters);
}