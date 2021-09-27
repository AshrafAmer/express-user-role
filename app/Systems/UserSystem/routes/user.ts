import {userRouters} from './../Controllers/UserController';

export default (server: any) => {
    server.use("/user", userRouters);
}