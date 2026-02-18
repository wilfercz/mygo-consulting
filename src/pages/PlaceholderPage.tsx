import HeroSection from '@/components/shared/HeroSection'

interface PlaceholderPageProps {
	title: string
	accentLabel?: string
}

const PlaceholderPage = ({ title, accentLabel }: PlaceholderPageProps) => (
	<HeroSection
		title={title}
		subtitle="Coming soon."
		accentLabel={accentLabel}
		variant="teal"
		size="medium"
	/>
)

export default PlaceholderPage
