import { Color } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/colors`

const getColors = async (): Promise<Color[]> => {
	const response = await fetch(URL)

	return response.json() as Promise<Color[]>
}

export default getColors
