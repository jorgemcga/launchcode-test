import Transportation from "../models/Transportation"

export async function createTransportation(name: string, type: string) {
  return Transportation.create({ name, type })
}

export async function getAllTransportations() {
  return Transportation.findAll()
}

export async function getTransportationById(id: number) {
  return Transportation.findByPk(id)
}

export async function updateTransportation(id: number, name: string) {
  const transportation = await Transportation.findByPk(id)
  if (!transportation) {
    return null
  }
  transportation.name = name
  await transportation.save()
  return transportation
}

export async function deleteTransportation(id: number) {
  const transportation = await Transportation.findByPk(id)
  if (transportation) {
    await transportation.destroy()
  }
}
