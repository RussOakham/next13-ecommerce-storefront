import type { AxiosResponse } from 'axios'

import axios from '@/lib/axios'

import { Product } from '../../types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/products`

const getProduct = async (id: string): Promise<Product> => {
  const response: AxiosResponse<Product> = await axios.get(`${URL}/${id}`)

  return response.data
}

export default getProduct
