import  {
  Model,
  DataTypes
}  from 'sequelize';
import { sequelize } from './index';

  class Users extends Model {
  id!: number;
  Names!: string;
  NID!: string;
  Email!: string;
  PhoneNumber!: string;
  Gender!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
  Users.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    names: DataTypes.STRING,
    NID: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });


export default Users;