import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface IApiResponse<T> {
    success: boolean
    data: T | null
    message?: string
    errors?: string
    status?: number
  }

const client = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL as string })
interface IRequestOptions extends AxiosRequestConfig {
  isLogin?: boolean
  disableToast?: boolean
  params?: any | {
    stopServiceWorking?: boolean | undefined
  }
}

export const request = async <T>(options: IRequestOptions): Promise<IApiResponse<T>> => {
  const onSuccess = (response: AxiosResponse<T>) => {
    return {
      success: true,
      data: response.data,
      status: response.status
    }
  }

  const onError = (error: any) => {
    return {
      success: false,
      data: null,
      message: error?.response?.message ?? 'error',
      status: error?.response?.status
    }
  }

  return await client(options).then(onSuccess).catch(onError)
}
