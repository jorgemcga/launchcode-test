import { TRANSPORTATIONS } from './CONSTANTS'
import { IApiResponse, request } from '../baseService'
import { ITransportationResponse } from 'types/TransportationTypes'

export const getTransportationsService = async (): Promise<IApiResponse<ITransportationResponse[]>> =>
  await request({ url: TRANSPORTATIONS() })
