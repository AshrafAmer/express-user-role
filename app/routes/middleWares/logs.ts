export default (server: any) => {
    server.use((req: any, res: any, next: any) => {
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
        let status = res.statusCode;
        let body = method == 'POST' ? JSON.stringify(req.body) : JSON.stringify(req.params);
        
        console.log(`[${formatted_date}] ${method}:${url} \n Request: ${body} \n Response: ${status}`);
        
        next();
    });
}