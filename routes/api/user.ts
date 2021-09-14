export default (server: any) => {
    const usersRouters = require('./../../controllers/UserController');
    server.use("/user", usersRouters);
}