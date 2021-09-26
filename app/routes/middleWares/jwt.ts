const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

export default (server: any) => {
    server.use((req: any, res: any, next: any) => {
        //check if user is logged in or not
        if(req.headers._token){
            jwt.verify(req.headers._token, jwtKey, function(err: any, data: any) {
                if(err) res.status().json({success: false, error: err});
                
                next();
            });
        }
        else
        {
            //403 Forbidden
            res.status(403).json({success: false, error: 'Invalid request, The client does not have access rights to the content. It is unauthorized'});
        }
    });
}