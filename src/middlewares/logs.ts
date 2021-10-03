import * as express from 'express';

export default (server: express.Application) => {
    server.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        let current_dateTime = new Date();

        let formatted_date =
            current_dateTime.getFullYear() +
            "-" +
            (current_dateTime.getMonth() + 1) +
            "-" +
            current_dateTime.getDate() +
            " " +
            current_dateTime.getHours() +
            ":" +
            current_dateTime.getMinutes() +
            ":" +
            current_dateTime.getSeconds();
        
        let method = req.method;
        let url = req.url;
        let body = method == 'POST' ? JSON.stringify(req.body) : JSON.stringify(req.query);
        
        console.log(`[${formatted_date}] ${method}:${url} \n Request: ${body}`);
        
        next();
    });
}
