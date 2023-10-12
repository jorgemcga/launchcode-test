import { atom } from 'jotai'
import { IAirportResponse } from 'types/AirportTypes'
import { IQuoteResponse } from 'types/QuoteTypes'
import { ITransportationResponse } from 'types/TransportationTypes'

export const isReloadingAtom = atom<boolean>(true)
export const quotesAtom = atom<IQuoteResponse[]>([] as IQuoteResponse[])
export const airportsAtom = atom<IAirportResponse[]>([] as IAirportResponse[])
export const transportationsAtom = atom<ITransportationResponse[]>([] as ITransportationResponse[])
