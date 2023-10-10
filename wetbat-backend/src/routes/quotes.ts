import express, { Request, Response } from "express"
import Quote from "../models/Quote"

const router = express.Router()

// Create a new quote
router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      originAirportId,
      destinationAirportId,
      departureDate,
      returnDate,
      transportationType,
    } = req.body
    const quote = await Quote.create({
      originAirportId,
      destinationAirportId,
      departureDate,
      returnDate,
      transportationType,
    })
    res.status(201).json(quote)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creating quote" })
  }
})

// Read all quotes
router.get("/", async (req: Request, res: Response) => {
  try {
    const quotes = await Quote.findAll()
    res.status(200).json(quotes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching quotes" })
  }
})

// Update a quote by ID
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  const {
    originAirportId,
    destinationAirportId,
    departureDate,
    returnDate,
    transportationType,
  } = req.body
  try {
    const quote = await Quote.findByPk(id)
    if (!quote) {
      return res.status(404).json({ message: "Quote not found" })
    }
    quote.originAirportId = originAirportId
    quote.destinationAirportId = destinationAirportId
    quote.departureDate = departureDate
    quote.returnDate = returnDate
    quote.transportationType = transportationType
    await quote.save()
    res.status(200).json(quote)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error updating quote" })
  }
})

// Delete a quote by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const quote = await Quote.findByPk(id)
    if (!quote) {
      return res.status(404).json({ message: "Quote not found" })
    }
    await quote.destroy()
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error deleting quote" })
  }
})

export default router
