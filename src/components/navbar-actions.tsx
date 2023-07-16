'use client'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

import useCart from '@/hooks/use-cart'
import useIsMounted from '@/hooks/use-is-mounted'

import Button from './ui/button'

const NavbarActions = () => {
	const router = useRouter()
	const isMounted = useIsMounted()
	const cart = useCart()

	if (!isMounted) return null

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				className="py-2F flex items-center rounded-full bg-black px-4"
				onClick={() => router.push('/cart')}
			>
				<ShoppingBag size={20} color="white" />
				<span className="ml-2 text-sm font-medium text-white">
					{cart.items.length}
				</span>
			</Button>
		</div>
	)
}

export default NavbarActions
