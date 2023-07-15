'use client'

import { Expand, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Product } from '../../../types'

import Currency from './currency'
import IconButton from './icon-button'

interface ProductCardProps {
  product: Product
}

const expandIcon = <Expand size={20} className="text-gray-600" />

const shoppingCartIcon = <ShoppingCart size={20} className="text-gray-600" />

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${product.id}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(event) => handleKeyDown(event)}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={product?.images?.[0]?.url as string}
          className="rounded-md"
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton onClick={() => {}} icon={expandIcon} />
            <IconButton onClick={() => {}} icon={shoppingCartIcon} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">{product?.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  )
}

export default ProductCard
