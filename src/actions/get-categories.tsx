import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/categories`

const getCategories = async (): Promise<Category[]> => {
	const response = await fetch(URL)

	return response.json() as Promise<Category[]>
}

export default getCategories
