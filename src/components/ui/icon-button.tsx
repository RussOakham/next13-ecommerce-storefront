'use client'

import { MouseEventHandler } from 'react'

import { cn } from '@/lib/utils'

interface IconButtonProps {
  className?: string
  icon: React.ReactElement
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

const IconButton = ({ className, icon, onClick }: IconButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-center rounded-full border bg-white shadow-md transition hover:scale-110',
        className,
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default IconButton
