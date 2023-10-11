import * as QuoteRepository from "../repositories/quoteRepository"

export async function createQuote(
  originAirportId: number,
  destinationAirportId: number,
  departureDate: Date,
  returnDate: Date,
  transportationTypeId: number,
  travellers: number,
  name: string
) {
  return QuoteRepository.createQuote(
    originAirportId,
    destinationAirportId,
    departureDate,
    returnDate,
    transportationTypeId,
    travellers,
    name,
    Math.floor(Math.random() * 2000) // creates a random value for test purpose
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
