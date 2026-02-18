export interface NavItem {
	label: string
	href: string
	children?: NavGroup[]
}

export interface NavGroup {
	groupLabel?: string
	items: { label: string; href: string }[]
}

export const navigation: NavItem[] = [
	{ label: 'Home', href: '/' },
	{
		label: 'Services',
		href: '/services',
		children: [
			{
				groupLabel: 'SAP Platform & Core',
				items: [
					{
						label: 'SAP Core Enablement',
						href: '/services/sap-core-enablement',
					},
					{ label: 'SAP BTP', href: '/services/sap-btp' },
					{
						label: 'SAP Central Finance',
						href: '/services/sap-central-finance',
					},
				],
			},
			{
				groupLabel: 'SAP Supply Chain',
				items: [
					{
						label: 'Digital Supply Chain',
						href: '/services/digital-supply-chain',
					},
					{
						label: 'Digital Manufacturing Cloud',
						href: '/services/digital-manufacturing-cloud',
					},
					{ label: 'SAP EWM', href: '/services/sap-ewm' },
					{ label: 'SAP IBP', href: '/services/sap-ibp' },
					{
						label: 'SAP Transportation Management',
						href: '/services/sap-transportation-management',
					},
				],
			},
			{
				groupLabel: 'Transformation & Execution',
				items: [
					{
						label: 'Business Transformation Management',
						href: '/services/business-transformation-management',
					},
					{
						label: 'Migration Services',
						href: '/services/migration-services',
					},
					{ label: 'AMS', href: '/services/ams' },
					{
						label: 'Tricentis Testing Automation',
						href: '/services/tricentis-testing-automation',
					},
					{
						label: 'User Experience',
						href: '/services/user-experience',
					},
				],
			},
		],
	},
	{
		label: 'Solutions',
		href: '/solutions',
		children: [
			{
				items: [
					{
						label: 'SAP Digital Supply Chain',
						href: '/solutions/sap-digital-supply-chain',
					},
					{
						label: 'SAP Product Lifecycle Management',
						href: '/solutions/sap-product-lifecycle-management',
					},
					{
						label: 'Marketing and Sales (SAP C/4HANA)',
						href: '/solutions/marketing-sales-sap-c4hana',
					},
					{
						label: 'Spend Management',
						href: '/solutions/spend-management',
					},
					{
						label: 'SAP Human Resource Solutions',
						href: '/solutions/sap-human-resource-solutions',
					},
					{
						label: 'Asset Management & Maintenance Optimization',
						href: '/solutions/asset-management-maintenance-optimization',
					},
				],
			},
		],
	},
	{
		label: 'Industries',
		href: '/industries',
		children: [
			{
				items: [
					{
						label: 'Life Sciences',
						href: '/industries/life-sciences',
					},
					{
						label: 'Consumer Goods',
						href: '/industries/consumer-goods',
					},
					{ label: 'Automotive', href: '/industries/automotive' },
					{
						label: 'Telecommunications',
						href: '/industries/telecommunications',
					},
					{ label: 'Healthcare', href: '/industries/healthcare' },
					{ label: 'Gas and Oil', href: '/industries/gas-and-oil' },
					{ label: 'Chemical', href: '/industries/chemical' },
				],
			},
		],
	},
	{
		label: 'Resources',
		href: '/resources',
		children: [
			{
				items: [
					{ label: 'Events', href: '/resources/events' },
					{ label: 'News Room', href: '/resources/news-room' },
					{ label: 'White Papers', href: '/resources/white-papers' },
					{ label: 'FAQs', href: '/resources/faqs' },
				],
			},
		],
	},
	{
		label: 'Portfolio',
		href: '/portfolio',
		children: [
			{
				items: [
					{ label: 'Case Studies', href: '/portfolio/case-studies' },
					{ label: 'Products', href: '/portfolio/products' },
				],
			},
		],
	},
	{
		label: 'Company',
		href: '/company',
		children: [
			{
				items: [
					{ label: 'About', href: '/company/about' },
					{ label: 'Partners', href: '/company/partners' },
					{ label: 'Careers', href: '/company/careers' },
					{ label: 'Awards', href: '/company/awards' },
					{ label: 'Contact', href: '/company/contact' },
				],
			},
		],
	},
]
