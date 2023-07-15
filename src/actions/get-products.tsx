import type { AxiosResponse } from 'axios'
import qs from 'query-string'

import axios from '@/lib/axios'

import { Product } from '../../types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/products`

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  })

  const response: AxiosResponse<Product[]> = await axios.get(url)

  return response.data
}

export default getProducts
