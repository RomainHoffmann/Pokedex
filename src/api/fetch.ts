import axios, { AxiosResponse, CancelToken } from "axios"

type Result = {
  [key: string]: any
}

export const fetch = async (url: string): Promise<any> => {
  const response: AxiosResponse = await axios.get(url)
  const data: any = response.data
  return data
}
