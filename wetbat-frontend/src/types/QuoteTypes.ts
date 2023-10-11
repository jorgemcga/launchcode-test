import { IAirportResponse } from "./AirportTypes"
import { ITransportationResponse } from "./TransportationTypes"

export interface IQuoteRequest {
  originAirportId: number
  destinationAirportId: number
  departureDate: Date
  returnDate: Date
  transportationTypeId: number
  travellers: number
  name: string
}

export interface IQuoteResponse extends IQuoteRequest {
  id: number
  originAirport: IAirportResponse
  destinationAirport: IAirportResponse
  transportation: ITransportationResponse
  price: number
}
