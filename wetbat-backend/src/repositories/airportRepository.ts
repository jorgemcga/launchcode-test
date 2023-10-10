import Airport from "../models/Airport"

export async function createAirport(name: string, code: string) {
  return Airport.create({ name, code })
}

export async function getAllAirports() {
  return Airport.findAll()
}

export async function getAirportById(id: number) {
  return Airport.findByPk(id)
}

export async function updateAirport(id: number, name: string, code: string) {
  const airport = await Airport.findByPk(id)
  if (!airport) {
    return null
  }
  airport.name = name
  airport.code = code
  await airport.save()
  return airport
}

export async function deleteAirport(id: number) {
  const airport = await Airport.findByPk(id)
  if (airport) {
    await airport.destroy()
  }
}
