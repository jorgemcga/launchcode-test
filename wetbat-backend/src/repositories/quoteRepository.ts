import Quote from "../models/Quote"

export async function createQuote(
  origin: string,
  destination: string,
  date: Date,
  transportationType: string
) {
  return Quote.create({ origin, destination, date, transportationType })
}

export async function getAllQuotes() {
  return Quote.findAll()
}

export async function getQuoteById(id: number) {
  return Quote.findByPk(id)
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
