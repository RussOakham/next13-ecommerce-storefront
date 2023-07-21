import { Billboard } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
	const response = await fetch(`${URL}/${id}`)

	return response.json() as Promise<Billboard>
}

export default getBillboard
