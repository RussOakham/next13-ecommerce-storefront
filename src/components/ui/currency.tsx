'use client'

import useIsMounted from '@/hooks/useIsMounted'
import { formatGbp } from '@/lib/utils'

interface CurrencyProps {
  value: string | number
}

const Currency = ({ value }: CurrencyProps) => {
  const isMounted = useIsMounted()
  const formattedValue = formatGbp.format(Number(value))

  if (!isMounted) return null

  return <div className="font-semibold">{formattedValue}</div>
}

export default Currency
