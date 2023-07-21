import { Product } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/products`

const getProduct = async (id: string): Promise<Product> => {
	const response = await fetch(`${URL}/${id}`)

	return response.json() as Promise<Product>
}

export default getProduct
