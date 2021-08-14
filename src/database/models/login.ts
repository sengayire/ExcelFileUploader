import  {
  Model,
  DataTypes
}  from 'sequelize';
import { sequelize } from './index';

  class Login extends Model {
  id!: number;
  names!: string;
  userName!: string;
  Password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
  Login.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    names: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Logins',
  });


export default Login;