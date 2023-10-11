export const QUOTES = () =>
  `${process.env.REACT_APP_BACKEND_URL as string}/quotes`

export const QUOTES_BY_ID = (id: string | number) =>
  `${process.env.REACT_APP_BACKEND_URL as string}/quotes/${id}`