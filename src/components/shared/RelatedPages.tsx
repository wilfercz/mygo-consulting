import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface RelatedPagesProps {
	title?: string
	pages: { label: string; href: string; description?: string }[]
}

const RelatedPages = ({
	title = 'Related Pages',
	pages,
}: RelatedPagesProps) => (
	<div>
		<h3 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
			{title}
		</h3>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			{pages.map((page) => (
				<Link
					key={page.href}
					to={page.href}
					className="group flex items-start gap-3 p-4 border border-border hover:border-accent/30 transition-colors"
				>
					<div className="flex-1">
						<h4 className="text-sm font-bold group-hover:text-accent transition-colors">
							{page.label}
						</h4>
						{page.description && (
							<p className="text-xs text-muted-foreground mt-1">
								{page.description}
							</p>
						)}
					</div>
					<ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mt-0.5" />
				</Link>
			))}
		</div>
	</div>
)

export default RelatedPages
