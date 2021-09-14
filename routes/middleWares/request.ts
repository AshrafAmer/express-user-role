const cors = require("cors");

export default (server: any, express: any) => {
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
}