import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"

class Transportation extends Model {
  public id!: number
  public name!: string
}

Transportation.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Transportation",
  }
)

export default Transportation
