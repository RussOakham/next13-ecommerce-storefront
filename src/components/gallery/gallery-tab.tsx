import { Tab } from '@headlessui/react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Image as ImageType } from '../../../types'

interface GalleryTabProps {
	image: ImageType
}

const GalleryTab = ({ image }: GalleryTabProps) => {
	return (
		<Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
			{({ selected }) => (
				<div>
					<span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
						<Image
							className="object-cover object-center"
							src={image.url}
							alt="Image"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							loading="lazy"
						/>
					</span>
					<span
						className={cn(
							'absolute inset-0 rounded-md ring-2 ring-offset-2',
							selected ? 'ring-black' : 'ring-transparent',
						)}
					/>
				</div>
			)}
		</Tab>
	)
}

export default GalleryTab