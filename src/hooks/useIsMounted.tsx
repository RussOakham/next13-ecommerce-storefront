import { useEffect, useState } from 'react'

const useIsMounted = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)

		return () => setIsMounted(false)
	}, [isMounted])

	return isMounted
}

export default useIsMounted
