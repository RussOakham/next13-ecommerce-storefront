import { Product } from '../../types'

import NoResults from './ui/no-results'
import ProductCard from './ui/product-card'

interface ProductListProps {
	title: string
	products: Product[]
}

const ProductList = ({ title, products }: ProductListProps) => {
	return (
		<div className="space-y-4">
			<h3 className="text-3xl font-bold">{title}</h3>
			{products.length === 0 ? (
				<NoResults />
			) : (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	)
}

export default ProductList
