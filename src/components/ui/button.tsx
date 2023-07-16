import React, { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, ...props }, ref) => {
		return (
			<button
				type="button"
				ref={ref}
				className={cn(
					'w-auto rounded-full border border-transparent bg-black px-5 py-3 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		)
	},
)

Button.displayName = 'Button'

export default Button
