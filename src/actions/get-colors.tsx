import type { AxiosResponse } from 'axios'

import axios from '@/lib/axios'
import { Color } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/colors`

const getColors = async (): Promise<Color[]> => {
	const response: AxiosResponse<Color[]> = await axios.get(URL)

	return response.data
}

export default getColors
