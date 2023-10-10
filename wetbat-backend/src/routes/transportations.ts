import express, { Request, Response } from "express"
import Transportation from "../models/Transportation"

const router = express.Router()

// Create a new transportation
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, type } = req.body
    const transportation = await Transportation.create({ name, type })
    res.status(201).json(transportation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creating transportation" })
  }
})

// Read all transportations
router.get("/", async (req: Request, res: Response) => {
  try {
    const transportations = await Transportation.findAll()
    res.status(200).json(transportations)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching transportations" })
  }
})

// Update a transportation by ID
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, type } = req.body
  try {
    const transportation = await Transportation.findByPk(id)
    if (!transportation) {
      return res.status(404).json({ message: "Transportation not found" })
    }
    transportation.name = name
    await transportation.save()
    res.status(200).json(transportation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error updating transportation" })
  }
})

// Delete a transportation by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const transportation = await Transportation.findByPk(id)
    if (!transportation) {
      return res.status(404).json({ message: "Transportation not found" })
    }
    await transportation.destroy()
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error deleting transportation" })
  }
})

export default router
