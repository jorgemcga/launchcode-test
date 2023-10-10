import * as AirportRepository from "../repositories/airportRepository"

export async function createAirport(
  name: string,
  city: string,
  country: string,
  code: string
) {
  return AirportRepository.createAirport(name, city, country, code)
}

export async function getAllAirports() {
  return AirportRepository.getAllAirports()
}

export async function getAirportById(id: number) {
  return AirportRepository.getAirportById(id)
}

export async function updateAirport(
  id: number,
  name: string,
  city: string,
  country: string,
  code: string
) {
  return AirportRepository.updateAirport(id, name, city, country, code)
}

export async function deleteAirport(id: number) {
  return AirportRepository.deleteAirport(id)
}
