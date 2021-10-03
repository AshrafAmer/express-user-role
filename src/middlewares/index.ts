import * as express from 'express';
import requestLogs from "./logs";
import requestJwt from "./jwt";

export default (server: express.Application) => {
    requestLogs(server);
    requestJwt(server);
}