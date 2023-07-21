'use client'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { AxiosError, AxiosResponse } from 'axios'
import { useSearchParams } from 'next/navigation'

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import axios from '@/lib/axios'

interface PostCheckoutResponse {
	url: string
}

const Summary: React.FC = () => {
	const searchParams = useSearchParams()
	const items = useCart((state) => state.items)
	const removeAll = useCart((state) => state.removeAll)

	useEffect(() => {
		if (searchParams.get('success')) {
			toast.success('Payment successful')

			removeAll()
		}

		if (searchParams.get('canceled')) {
			toast.error('Something went wrong')
		}
	}, [removeAll, searchParams])

	const totalPrice = items.reduce((total, item) => {
		return total + Number(item.price)
	}, 0)

	const onCheckout = async () => {
		try {
			const response: AxiosResponse<PostCheckoutResponse> = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
				{
					productIds: items.map((item) => item.id),
				},
			)

			window.location = response.data.url as unknown as Location
		} catch (error) {
			toast.error(
				`Something went wrong: ${(error as AxiosError).message} Status: ${
					(error as AxiosError).status
				}`,
			)
		}
	}

	return (
		<div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
			<h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
			<div className="mt-6 space-y-4">
				<div className="flex items-center justify-between border-t border-gray-200 pt-4">
					<div className="text-base font-medium text-gray-900">Order Total</div>
					<Currency value={totalPrice} />
				</div>
			</div>
			<Button
				className="mt-6 w-full"
				onClick={onCheckout}
				disabled={items.length === 0}
			>
				Checkout
			</Button>
		</div>
	)
}

export default Summary
