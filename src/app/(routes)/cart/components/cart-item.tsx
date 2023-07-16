'use client'

import { X } from 'lucide-react'
import Image from 'next/image'

import Currency from '@/components/ui/currency'
import IconButton from '@/components/ui/icon-button'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types'

interface CartItemProps {
	item: Product
}

const CartItem = ({ item }: CartItemProps) => {
	const cart = useCart()

	const onRemove = () => {
		cart.removeItem(item.id)
	}

	return (
		<li className="borer-b flex py-6">
			<div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
				<Image
					src={item.images[0]?.url as string}
					alt={item.name}
					fill
					sizes="(min-width: 640px) 200px, 100px"
					className="object-cover object-center"
				/>
			</div>
			<div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
				<div className="absolute right-0 top-0 z-10">
					<IconButton icon={<X size={16} />} onClick={onRemove} />
				</div>
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div className="flex justify-between">
						<p className="text-lg font-semibold text-black">{item.name}</p>
					</div>
					<div className="mt-1 flex text-sm">
						<p className="text-gray-500">{item.color.name}</p>
						<p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
							{item.size.name}
						</p>
					</div>
					<Currency value={item.price} />
				</div>
			</div>
		</li>
	)
}

export default CartItem
