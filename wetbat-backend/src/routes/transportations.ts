import express from "express"
import * as TransportationController from "../controllers/transportationController"

const router = express.Router()

router.post("/", TransportationController.createTransportation)

router.get("/", TransportationController.getAllTransportations)

router.get("/:id", TransportationController.getTransportationById)

router.put("/:id", TransportationController.updateTransportation)

router.delete("/:id", TransportationController.deleteTransportation)

export default router
