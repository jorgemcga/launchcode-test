import { AIRPORTS } from './CONSTANTS'
import { IApiResponse, request } from '../baseService'
import { IAirportResponse } from 'types/AirportTypes'

export const getAirportsService = async (): Promise<IApiResponse<IAirportResponse[]>> =>
  await request({ url: AIRPORTS() })

