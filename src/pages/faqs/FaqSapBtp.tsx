import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import CTABand from '@/components/shared/CTABand'

const faqItems = [
	{
		q: 'What is SAP BTP?',
		a: 'SAP Business Technology Platform is a unified platform that combines database, analytics, integration, and extension capabilities. It serves as the foundation for building and extending SAP applications in the cloud.',
	},
	{
		q: 'How long does a typical BTP implementation take?',
		a: 'Implementation timelines vary based on scope. A focused integration project typically takes 8–12 weeks, while a comprehensive BTP landscape setup with multiple services can take 16–24 weeks.',
	},
	{
		q: 'Do we need to migrate to S/4HANA before using BTP?',
		a: 'No. SAP BTP works alongside existing SAP ECC systems as well as S/4HANA. Many organizations begin their BTP journey while still running ECC to accelerate innovation before a full migration.',
	},
	{
		q: 'What is the difference between Cloud Foundry and Kyma on BTP?',
		a: 'Cloud Foundry is a polyglot application runtime ideal for business applications. Kyma is a Kubernetes-based runtime suited for microservices and event-driven architectures. The choice depends on your technical requirements and team expertise.',
	},
	{
		q: 'How does MYGO approach BTP architecture?',
		a: 'We take an architecture-first approach: mapping your current landscape, identifying integration touchpoints, defining extension scenarios, and building a phased roadmap that aligns with your business priorities.',
	},
	{
		q: 'What about security and compliance on BTP?',
		a: 'SAP BTP includes enterprise-grade security features including identity authentication, role-based access control, and data encryption. We implement security-by-design principles in every BTP project.',
	},
]

const FaqSapBtp = () => (
	<>
		<HeroSection
			title="SAP BTP — Frequently Asked Questions"
			subtitle="Answers to common questions about SAP Business Technology Platform implementation and consulting."
			accentLabel="FAQs — Services"
			variant="teal"
			size="small"
		/>

		<SectionWrapper>
			<div className="max-w-3xl mx-auto space-y-6">
				{faqItems.map((faq, i) => (
					<div key={i} className="border border-border p-6">
						<h3 className="font-bold mb-3">{faq.q}</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{faq.a}
						</p>
					</div>
				))}
			</div>
		</SectionWrapper>

		<CTABand
			headline="Still Have Questions?"
			subtext="Our SAP BTP experts are ready to discuss your specific requirements."
		/>
	</>
)

export default FaqSapBtp
