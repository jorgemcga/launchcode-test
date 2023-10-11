import express from "express"
import bodyParser from "body-parser"
import sequelize from "./config/database"
import airportsRoutes from "./routes/airports"
import transportationsRoutes from "./routes/transportations"
import quotesRoutes from "./routes/quotes"
import { initializeData } from "./scripts/initializeData"
import cors from 'cors'

console.log("Starting app")
const app = express()

app.use(bodyParser.json())

sequelize
  .sync()
  .then(async () => {
    console.log("Database connected")
    await initializeData()
  })
  .catch((error: Error) => {
    console.error("Error on database connection:", error)
  })

app.use(cors()) // only for test purpose
app.use("/airports", airportsRoutes)
app.use("/transportations", transportationsRoutes)
app.use("/quotes", quotesRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
