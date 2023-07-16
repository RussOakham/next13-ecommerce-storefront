'use client'

import PreviewModal from '@/components/preview-modal'
import useIsMounted from '@/hooks/use-is-mounted'

const ModalProvider = () => {
	const isMounted = useIsMounted()

	if (!isMounted) return null

	return <PreviewModal />
}

export default ModalProvider
