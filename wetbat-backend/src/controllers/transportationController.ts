import { Request, Response } from "express"
import * as TransportationService from "../services/transportationService"

export async function createTransportation(req: Request, res: Response) {
  const { name } = req.body
  try {
    const transportation = await TransportationService.createTransportation(
      name
    )
    res.status(201).json(transportation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creating transportation" })
  }
}

export async function getAllTransportations(req: Request, res: Response) {
  try {
    const transportations = await TransportationService.getAllTransportations()
    res.status(200).json(transportations)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching transportations" })
  }
}

export async function getTransportationById(req: Request, res: Response) {
  const { id } = req.params
  try {
    const transportation = await TransportationService.getTransportationById(
      Number(id)
    )
    if (!transportation) {
      res.status(404).json({ message: "Transportation not found" })
    } else {
      res.status(200).json(transportation)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error fetching transportation" })
  }
}

export async function updateTransportation(req: Request, res: Response) {
  const { id } = req.params
  const { name } = req.body
  try {
    const transportation = await TransportationService.updateTransportation(Number(id), name)
    if (!transportation) {
      res.status(404).json({ message: "Transportation not found" })
    } else {
      res.status(200).json(transportation)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error updating transportation" })
  }
}

export async function deleteTransportation(req: Request, res: Response) {
  const { id } = req.params
  try {
    await TransportationService.deleteTransportation(Number(id))
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error deleting transportation" })
  }
}
