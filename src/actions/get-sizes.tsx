import { Size } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/sizes`

const getSizes = async (): Promise<Size[]> => {
	const response = await fetch(URL)

	return response.json() as Promise<Size[]>
}

export default getSizes
