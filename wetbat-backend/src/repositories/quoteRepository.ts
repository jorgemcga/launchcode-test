import Airport from "../models/Airport"
import Quote from "../models/Quote"
import Transportation from "../models/Transportation"

export async function createQuote(
  originAirportId: number,
  destinationAirportId: number,
  departureDate: Date,
  returnDate: Date,
  transportationTypeId: number,
  travellers: number,
  name: string
) {
  return Quote.create({
    originAirportId,
    destinationAirportId,
    departureDate,
    returnDate,
    transportationTypeId,
    travellers,
    name,
  })
}

export async function getAllQuotes() {
  return Quote.findAll({
    include: [
      { model: Airport, as: 'originAirport', attributes: ['id', 'code', 'city', 'country', 'name'] },
      { model: Airport, as: 'destinationAirport', attributes: ['id', 'code', 'city', 'country', 'name'] },
      { model: Transportation, as: 'transportation', attributes: ['id', 'name'] },
    ],
  })
}

export async function getQuoteById(id: number) {
  return Quote.findByPk(id, {
    include: [
      { model: Airport, as: 'originAirport', attributes: ['id', 'code', 'city', 'country', 'name'] },
      { model: Airport, as: 'destinationAirport', attributes: ['id', 'code', 'city', 'country', 'name'] },
      { model: Transportation, as: 'transportation', attributes: ['id', 'name'] },
    ],
  })
}

export async function updateQuote(
  id: number,
  originAirportId: number,
  destinationAirportId: number,
  departureDate: Date,
  returnDate: Date,
  transportationTypeId: number,
  travellers: number,
  name: string
) {
  const quote = await Quote.findByPk(id)
  if (!quote) {
    return null
  }
  quote.originAirportId = originAirportId
  quote.destinationAirportId = destinationAirportId
  quote.departureDate = departureDate
  quote.returnDate = returnDate
  quote.transportationTypeId = transportationTypeId
  quote.travellers = travellers
  quote.name = name

  await quote.save()
  return quote
}

export async function deleteQuote(id: number) {
  const quote = await Quote.findByPk(id)
  if (quote) {
    await quote.destroy()
  }
}
