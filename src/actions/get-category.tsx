import type { AxiosResponse } from 'axios'

import axios from '@/lib/axios'
import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/categories`

const getCategory = async (id: string): Promise<Category> => {
	const response: AxiosResponse<Category> = await axios.get(`${URL}/${id}`)

	return response.data
}

export default getCategory
