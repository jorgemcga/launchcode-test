import * as TransportationRepository from "../repositories/transportationRepository"

export async function createTransportation(name: string) {
  return TransportationRepository.createTransportation(name)
}

export async function getAllTransportations() {
  return TransportationRepository.getAllTransportations()
}

export async function getTransportationById(id: number) {
  return TransportationRepository.getTransportationById(id)
}

export async function updateTransportation(id: number, name: string) {
  return TransportationRepository.updateTransportation(id, name)
}

export async function deleteTransportation(id: number) {
  return TransportationRepository.deleteTransportation(id)
}
