import { QUOTES } from './CONSTANTS'
import { IApiResponse, request } from '../baseService'
import { IQuoteResponse } from '../../types/QuoteTypes'

export const getQuotesService = async (): Promise<IApiResponse<IQuoteResponse[]>> =>
  await request({ url: QUOTES() })

