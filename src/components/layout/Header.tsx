import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigation, NavItem, NavGroup } from '@/data/navigation'
import mygoLogo from '@/assets/mygo-logo-full.png'

const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
	const [scrolled, setScrolled] = useState(false)
	const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
	const location = useLocation()

	useEffect(() => {
		setMobileOpen(false)
		setActiveDropdown(null)
	}, [location])

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 bg-mygo-teal ${
				scrolled ? 'shadow-lg' : ''
			}`}
		>
			<div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
				{/* Logo */}
				<Link to="/" className="flex-shrink-0">
					<img
						src={mygoLogo}
						alt="MYGO Consulting"
						className="h-8 md:h-10 w-auto brightness-0 invert"
					/>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden lg:flex items-center gap-1">
					{navigation.map((item) => (
						<div
							key={item.label}
							className="relative"
							onMouseEnter={() =>
								item.children && setActiveDropdown(item.label)
							}
							onMouseLeave={() => setActiveDropdown(null)}
						>
							<Link
								to={item.href}
								className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
							>
								{item.label}
								{item.children && (
									<ChevronDown className="w-3 h-3" />
								)}
							</Link>

							{/* Dropdown */}
							{item.children && activeDropdown === item.label && (
								<DropdownMenu groups={item.children} />
							)}
						</div>
					))}
					<Link
						to="/company/contact"
						className="ml-4 px-5 py-2 bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors rounded-sm"
					>
						GET IN TOUCH WITH US
					</Link>
				</nav>

				{/* Mobile toggle */}
				<button
					className="lg:hidden text-primary-foreground p-2"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle menu"
				>
					{mobileOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="lg:hidden bg-mygo-teal border-t border-primary-foreground/10 max-h-[80vh] overflow-y-auto">
					<nav className="container mx-auto px-4 py-4 space-y-1">
						{navigation.map((item) => (
							<MobileNavItem
								key={item.label}
								item={item}
								expanded={mobileExpanded === item.label}
								onToggle={() =>
									setMobileExpanded(
										mobileExpanded === item.label
											? null
											: item.label,
									)
								}
							/>
						))}
						<Link
							to="/company/contact"
							className="block mt-4 px-5 py-3 bg-accent text-accent-foreground text-sm font-medium text-center rounded-sm"
						>
							GET IN TOUCH WITH US
						</Link>
					</nav>
				</div>
			)}
		</header>
	)
}

const DropdownMenu = ({ groups }: { groups: NavGroup[] }) => (
	<div className="absolute top-full left-0 bg-primary-foreground shadow-xl border border-border min-w-[260px] py-3">
		{groups.map((group, gi) => (
			<div
				key={gi}
				className={gi > 0 ? 'border-t border-border mt-2 pt-2' : ''}
			>
				{group.groupLabel && (
					<div className="px-4 py-1 text-xs font-accent font-semibold uppercase tracking-wider text-muted-foreground">
						{group.groupLabel}
					</div>
				)}
				{group.items.map((sub) => (
					<Link
						key={sub.href}
						to={sub.href}
						className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
					>
						{sub.label}
					</Link>
				))}
			</div>
		))}
	</div>
)

const MobileNavItem = ({
	item,
	expanded,
	onToggle,
}: {
	item: NavItem
	expanded: boolean
	onToggle: () => void
}) => {
	if (!item.children) {
		return (
			<Link
				to={item.href}
				className="block px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
			>
				{item.label}
			</Link>
		)
	}

	return (
		<div>
			<button
				onClick={onToggle}
				className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
			>
				{item.label}
				<ChevronDown
					className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
				/>
			</button>
			{expanded && (
				<div className="pl-4 space-y-0.5">
					<Link
						to={item.href}
						className="block px-3 py-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground"
					>
						Overview
					</Link>
					{item.children!.map((group, gi) => (
						<div key={gi}>
							{group.groupLabel && (
								<div className="px-3 pt-2 pb-1 text-xs font-accent font-semibold uppercase tracking-wider text-primary-foreground/50">
									{group.groupLabel}
								</div>
							)}
							{group.items.map((sub) => (
								<Link
									key={sub.href}
									to={sub.href}
									className="block px-3 py-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground"
								>
									{sub.label}
								</Link>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Header
