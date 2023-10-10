import { Request, Response } from "express"
import * as QuoteService from "../services/quoteService"

export async function createQuote(req: Request, res: Response) {
  const { origin, destination, date, transportationType } = req.body
  try {
    const quote = await QuoteService.createQuote(
      origin,
      destination,
      date,
      transportationType
    )
    res.status(201).json(quote)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creating quote" })
  }
}

export async function getAllQuotes(req: Request, res: Response) {
  try {
    const quotes = await QuoteService.getAllQuotes()
    res.status(200).json(quotes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching quotes" })
  }
}

export async function getQuoteById(req: Request, res: Response) {
  const { id } = req.params
  try {
    const quote = await QuoteService.getQuoteById(Number(id))
    if (!quote) {
      res.status(404).json({ message: "Quote not found" })
    } else {
      res.status(200).json(quote)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching quote" })
  }
}

export async function updateQuote(req: Request, res: Response) {
  const { id } = req.params
  const {
    originAirportId,
    destinationAirportId,
    departureDate,
    returnDate,
    transportationTypeId,
    travellers,
    name
    } = req.body
  try {
    const quote = await QuoteService.updateQuote(
      Number(id),
      Number(originAirportId),
      Number(destinationAirportId),
      departureDate,
      returnDate,
      Number(transportationTypeId),
      Number(travellers),
      name
    )
    if (!quote) {
      res.status(404).json({ message: "Quote not found" })
    } else {
      res.status(200).json(quote)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error updating quote" })
  }
}

export async function deleteQuote(req: Request, res: Response) {
  const { id } = req.params
  try {
    await QuoteService.deleteQuote(Number(id))
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error deleting quote" })
  }
}
