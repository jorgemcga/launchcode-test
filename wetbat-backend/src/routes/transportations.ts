import express from "express"
import * as TransportationController from "../controllers/transportationController"

const router = express.Router()

// Criar um transporte
router.post("/", TransportationController.createTransportation)

// Obter todos os transportes
router.get("/", TransportationController.getAllTransportations)

// Obter um transporte por ID
router.get("/:id", TransportationController.getTransportationById)

// Atualizar um transporte por ID
router.put("/:id", TransportationController.updateTransportation)

// Excluir um transporte por ID
router.delete("/:id", TransportationController.deleteTransportation)

export default router
