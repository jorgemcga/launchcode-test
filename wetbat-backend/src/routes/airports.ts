import express, { Request, Response } from "express"
import Airport from "../models/Airport"

const router = express.Router()

// Create a new airport
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, code } = req.body
    const airport = await Airport.create({ name, code })
    res.status(201).json(airport)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creating airport" })
  }
})

// Read all airports
router.get("/", async (req: Request, res: Response) => {
  try {
    const airports = await Airport.findAll()
    res.status(200).json(airports)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching airports" })
  }
})

// Update an airport by ID
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, code } = req.body
  try {
    const airport = await Airport.findByPk(id)
    if (!airport) {
      return res.status(404).json({ message: "Airport not found" })
    }
    airport.name = name
    airport.code = code
    await airport.save()
    res.status(200).json(airport)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error updating airport" })
  }
})

// Delete an airport by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const airport = await Airport.findByPk(id)
    if (!airport) {
      return res.status(404).json({ message: "Airport not found" })
    }
    await airport.destroy()
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error deleting airport" })
  }
})

export default router
