const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;
const expectedUrls = ['login', 'register'];


export default (server: any) => {
    server.use((req: any, res: any, next: any) => {

        if(expectedUrls.some(url=> req.url.includes(url))){
            next();
        }else if(!req.headers._token){
            //403 Forbidden
            res.status(403).json({success: false, error: 'Invalid request, The client does not have access rights to the content. It is unauthorized'});
            return;
        }else{
            jwt.verify(req.headers._token, jwtKey, function(err: any, data: any) {
                if(err){
                    res.status(403).json({success: false, error: err});
                    return;
                }
                
                next();
            });
        }
    });
}