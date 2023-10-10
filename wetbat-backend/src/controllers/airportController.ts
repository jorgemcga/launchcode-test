import { Request, Response } from "express"
import * as AirportService from "../services/airportService"

export async function createAirport(req: Request, res: Response) {
  const { name, code } = req.body
  try {
    const airport = await AirportService.createAirport(name, code)
    res.status(201).json(airport)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creating airport" })
  }
}

export async function getAllAirports(req: Request, res: Response) {
  try {
    const airports = await AirportService.getAllAirports()
    res.status(200).json(airports)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching airports" })
  }
}

export async function getAirportById(req: Request, res: Response) {
  const { id } = req.params
  try {
    const airport = await AirportService.getAirportById(Number(id))
    if (!airport) {
      res.status(404).json({ message: "Airport not found" })
    } else {
      res.status(200).json(airport)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching airport" })
  }
}

export async function updateAirport(req: Request, res: Response) {
  const { id } = req.params
  const { name, code } = req.body
  try {
    const airport = await AirportService.updateAirport(Number(id), name, code)
    if (!airport) {
      res.status(404).json({ message: "Airport not found" })
    } else {
      res.status(200).json(airport)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error updating airport" })
  }
}

export async function deleteAirport(req: Request, res: Response) {
  const { id } = req.params
  try {
    await AirportService.deleteAirport(Number(id))
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error deleting airport" })
  }
}
