import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"
import Airport from "./Airport"
import Transportation from "./Transportation"

class Quote extends Model {
  public id!: number
  public originAirportId!: number
  public destinationAirportId!: number
  public departureDate!: Date
  public returnDate!: Date
  public transportationType!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public readonly originAirport?: Airport
  public readonly destinationAirport?: Airport
  public readonly transportation?: Transportation
}

Quote.init(
  {
    originAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destinationAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departureDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    transportationType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    travellers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Quote",
  }
)

// Define as associações
Quote.belongsTo(Airport, {
  as: "originAirport",
  foreignKey: "originAirportId",
})
Quote.belongsTo(Airport, {
  as: "destinationAirport",
  foreignKey: "destinationAirportId",
})
Quote.belongsTo(Transportation, {
  as: "transportation",
  foreignKey: "transportationType",
})

export default Quote
