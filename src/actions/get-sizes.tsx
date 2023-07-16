import type { AxiosResponse } from 'axios'

import axios from '@/lib/axios'
import { Size } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/sizes`

const getSizes = async (): Promise<Size[]> => {
	const response: AxiosResponse<Size[]> = await axios.get(URL)

	return response.data
}

export default getSizes
