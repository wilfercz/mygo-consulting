import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
	title: string
	description: string
	href: string
}

const ServiceCard = ({ title, description, href }: ServiceCardProps) => (
	<Link
		to={href}
		className="group block p-6 bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all duration-200"
	>
		<h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
			{title}
		</h3>
		<p className="text-sm text-muted-foreground leading-relaxed mb-4">
			{description}
		</p>
		<span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
			Learn more{' '}
			<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
		</span>
	</Link>
)

export default ServiceCard
