import { QUOTES } from './CONSTANTS'
import { IApiResponse, request } from '../baseService'
import { IQuoteRequest, IQuoteResponse } from '../../types/QuoteTypes'

export const getQuotesService = async (): Promise<IApiResponse<IQuoteResponse[]>> =>
  await request({ url: QUOTES() })

export const createQuoteService = async (data: IQuoteRequest): Promise<IApiResponse<IQuoteRequest>> =>
  await request({ url: QUOTES(), method: 'post', data: data })

