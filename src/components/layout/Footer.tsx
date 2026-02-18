import { Link } from 'react-router-dom'
import mygoLogo from '@/assets/mygo-logo-full.png'

const footerLinks = [
	{
		title: 'Services',
		links: [
			{
				label: 'SAP Core Enablement',
				href: '/services/sap-core-enablement',
			},
			{ label: 'SAP BTP', href: '/services/sap-btp' },
			{
				label: 'Migration Services',
				href: '/services/migration-services',
			},
			{ label: 'All Services', href: '/services' },
		],
	},
	{
		title: 'Solutions',
		links: [
			{
				label: 'Digital Supply Chain',
				href: '/solutions/sap-digital-supply-chain',
			},
			{ label: 'Spend Management', href: '/solutions/spend-management' },
			{ label: 'All Solutions', href: '/solutions' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'About', href: '/company/about' },
			{ label: 'Careers', href: '/company/careers' },
			{ label: 'Partners', href: '/company/partners' },
			{ label: 'Contact', href: '/company/contact' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ label: 'Case Studies', href: '/portfolio/case-studies' },
			{ label: 'FAQs', href: '/resources/faqs' },
			{ label: 'News Room', href: '/resources/news-room' },
			{ label: 'White Papers', href: '/resources/white-papers' },
		],
	},
]

const Footer = () => (
	<footer className="bg-mygo-teal text-primary-foreground">
		<div className="container mx-auto px-4 py-16">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
				{/* Brand col */}
				<div className="lg:col-span-1">
					<img
						src={mygoLogo}
						alt="MYGO Consulting"
						className="h-8 w-auto brightness-0 invert mb-4"
					/>
					<p className="text-sm text-primary-foreground/70 leading-relaxed">
						Architecture-driven SAP consulting for complex
						enterprises.
					</p>
				</div>

				{footerLinks.map((col) => (
					<div key={col.title}>
						<h4 className="font-accent text-xs font-semibold uppercase tracking-wider mb-4 text-primary-foreground/50">
							{col.title}
						</h4>
						<ul className="space-y-2">
							{col.links.map((link) => (
								<li key={link.href}>
									<Link
										to={link.href}
										className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-xs text-primary-foreground/50">
					© {new Date().getFullYear()} MYGO Consulting. All rights
					reserved.
				</p>
				<Link
					to="/company/contact"
					className="px-5 py-2 bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors rounded-sm"
				>
					GET IN TOUCH WITH US
				</Link>
			</div>
		</div>
	</footer>
)

export default Footer
