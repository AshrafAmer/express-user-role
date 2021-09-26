import requestHandler from "./request";
import requestLogs from "./logs";
import requestJwt from "./jwt";

export default (server: any, express: any) => {
    requestHandler(server, express);
    requestLogs(server);
    requestJwt(server);
}