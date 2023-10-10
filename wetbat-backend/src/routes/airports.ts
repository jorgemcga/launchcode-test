import express from "express"
import * as AirportController from "../controllers/airportController"

const router = express.Router()

// Criar um aeroporto
router.post("/", AirportController.createAirport)

// Obter todos os aeroportos
router.get("/", AirportController.getAllAirports)

// Obter um aeroporto por ID
router.get("/:id", AirportController.getAirportById)

// Atualizar um aeroporto por ID
router.put("/:id", AirportController.updateAirport)

// Excluir um aeroporto por ID
router.delete("/:id", AirportController.deleteAirport)

export default router
