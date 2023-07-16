'use client'

import { ShoppingBag } from 'lucide-react'

import useIsMounted from '@/hooks/useIsMounted'

import Button from './ui/button'

const NavbarActions = () => {
	const isMounted = useIsMounted()

	if (!isMounted) return null

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button className="py-2F flex items-center rounded-full bg-black px-4">
				<ShoppingBag size={20} color="white" />
				<span className="ml-2 text-sm font-medium text-white">0</span>
			</Button>
		</div>
	)
}

export default NavbarActions
