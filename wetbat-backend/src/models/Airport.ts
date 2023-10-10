import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Airport extends Model {
  public id!: number
  public name!: string
  public city!: string
  public country!: string
  public code!: string
}

Airport.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    sequelize,
    modelName: 'Airport',
  }
);

export default Airport;
