import {sequelize} from './sequelize';
import {User} from './User';
import {Role} from './Role';
import {Permission} from './Permission';
import {RolePermissions} from './RolePermissions';

class dbModels{
    private user:any = User;
    private role:any = Role;
    private permission:any = Permission;
    private rolePermissions:any = RolePermissions;

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
        sequelize.Role = this.role;
        sequelize.Permission = this.permission;
        sequelize.RolePermissions = this.rolePermissions;

        sequelize.sync()
        .then(() => {
            console.log(`User tables created!`);
        });
    }
}

export default new dbModels();