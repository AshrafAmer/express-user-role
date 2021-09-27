import {sequelize} from './sequelize';
import {User} from './User';

// export default async() => {

//     try {
//         await sequelize.authenticate();
//         console.log('DB connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }

//     sequelize.User = User;

//     sequelize.sync()
//     .then(() => {
//         console.log(`User table created!`);
//     });
// }

class dbModels{
    private user:any = User;

    public async authenticate(){
        try {
            await sequelize.authenticate();
            console.log('DB connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    public sync(){
        sequelize.User = this.user;

    sequelize.sync()
    .then(() => {
        console.log(`User table created!`);
    });
    }
}

export default new dbModels();