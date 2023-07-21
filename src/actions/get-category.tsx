import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/categories`

const getCategory = async (id: string): Promise<Category> => {
	const response = await fetch(`${URL}/${id}`)

	return response.json() as Promise<Category>
}

export default getCategory
