import requestHandler from "./request";
import logs from "./logs";

export default (server: any, express: any) => {
    requestHandler(server, express);
    logs(server);
}