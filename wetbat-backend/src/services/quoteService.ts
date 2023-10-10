import * as QuoteRepository from "../repositories/quoteRepository"

export async function createQuote(
  origin: string,
  destination: string,
  date: Date,
  transportationType: string
) {
  return QuoteRepository.createQuote(
    origin,
    destination,
    date,
    transportationType
  )
}

export async function getAllQuotes() {
  return QuoteRepository.getAllQuotes()
}

export async function getQuoteById(id: number) {
  return QuoteRepository.getQuoteById(id)
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
  return QuoteRepository.updateQuote(
    id,
    originAirportId,
    destinationAirportId,
    departureDate,
    returnDate,
    transportationTypeId,
    travellers,
    name
  )
}

export async function deleteQuote(id: number) {
  return QuoteRepository.deleteQuote(id)
}
