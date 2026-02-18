import { Link } from 'react-router-dom'

interface CTABandProps {
	headline?: string
	subtext?: string
	ctaLabel?: string
	ctaHref?: string
	variant?: 'teal' | 'dark-blue'
}

const CTABand = ({
	headline = 'Ready to Transform Your Enterprise?',
	subtext = 'Let our team of SAP experts guide your digital transformation journey.',
	ctaLabel = 'GET IN TOUCH WITH US',
	ctaHref = '/company/contact',
	variant = 'dark-blue',
}: CTABandProps) => (
	<section
		className={`py-20 ${variant === 'dark-blue' ? 'bg-mygo-dark-blue' : 'bg-mygo-teal'}`}
	>
		<div className="container mx-auto px-4 text-center">
			<h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
				{headline}
			</h2>
			<p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
				{subtext}
			</p>
			<Link
				to={ctaHref}
				className="inline-block px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors rounded-sm"
			>
				{ctaLabel}
			</Link>
		</div>
	</section>
)

export default CTABand
