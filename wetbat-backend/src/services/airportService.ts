import * as AirportRepository from "../repositories/airportRepository"

export async function createAirport(name: string, code: string) {
  return AirportRepository.createAirport(name, code)
}

export async function getAllAirports() {
  return AirportRepository.getAllAirports()
}

export async function getAirportById(id: number) {
  return AirportRepository.getAirportById(id)
}

export async function updateAirport(id: number, name: string, code: string) {
  return AirportRepository.updateAirport(id, name, code)
}

export async function deleteAirport(id: number) {
  return AirportRepository.deleteAirport(id)
}
