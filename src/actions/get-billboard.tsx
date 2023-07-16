import type { AxiosResponse } from 'axios'

import axios from '@/lib/axios'
import { Billboard } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
	const response: AxiosResponse<Billboard> = await axios.get(`${URL}/${id}`)

	return response.data
}

export default getBillboard
