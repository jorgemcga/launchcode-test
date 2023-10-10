import express from "express"
import * as AirportController from "../controllers/airportController"

const router = express.Router()

router.post("/", AirportController.createAirport)
router.get("/", AirportController.getAllAirports)
router.get("/:id", AirportController.getAirportById)
router.put("/:id", AirportController.updateAirport)
router.delete("/:id", AirportController.deleteAirport)

export default router
