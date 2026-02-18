import { ReactNode } from 'react'

interface SectionWrapperProps {
	children: ReactNode
	variant?: 'white' | 'light' | 'teal' | 'dark-blue'
	className?: string
}

const bgMap = {
	white: 'bg-background text-foreground',
	light: 'bg-mygo-light-blue text-foreground',
	teal: 'bg-mygo-teal text-primary-foreground',
	'dark-blue': 'bg-mygo-dark-blue text-primary-foreground',
}

const SectionWrapper = ({
	children,
	variant = 'white',
	className = '',
}: SectionWrapperProps) => (
	<section className={`py-16 md:py-24 ${bgMap[variant]} ${className}`}>
		<div className="container mx-auto px-4">{children}</div>
	</section>
)

export default SectionWrapper
