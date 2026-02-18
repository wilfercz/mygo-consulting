import { Link } from 'react-router-dom'

interface HeroSectionProps {
	title: string
	subtitle?: string
	accentLabel?: string
	ctaLabel?: string
	ctaHref?: string
	variant?: 'teal' | 'dark-blue'
	size?: 'full' | 'medium' | 'small'
}

const HeroSection = ({
	title,
	subtitle,
	accentLabel,
	ctaLabel,
	ctaHref = '/company/contact',
	variant = 'teal',
	size = 'medium',
}: HeroSectionProps) => {
	const heightClass =
		size === 'full'
			? 'min-h-[80vh]'
			: size === 'medium'
				? 'py-24 md:py-32'
				: 'py-16 md:py-20'

	return (
		<section
			className={`${variant === 'dark-blue' ? 'bg-mygo-dark-blue' : 'bg-mygo-teal'} ${heightClass} flex items-center`}
		>
			<div className="container mx-auto px-4">
				{accentLabel && (
					<span className="font-accent text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
						{accentLabel}
					</span>
				)}
				<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-4xl leading-tight">
					{title}
				</h1>
				{subtitle && (
					<p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl">
						{subtitle}
					</p>
				)}
				{ctaLabel && (
					<Link
						to={ctaHref}
						className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors rounded-sm"
					>
						{ctaLabel}
					</Link>
				)}
			</div>
		</section>
	)
}

export default HeroSection
