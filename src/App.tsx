import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import ServicesHub from '@/pages/ServicesHub'
import SolutionsHub from '@/pages/SolutionsHub'
import IndustriesHub from '@/pages/IndustriesHub'
import FAQsHub from '@/pages/FAQsHub'
import CaseStudiesHub from '@/pages/CaseStudiesHub'
import Contact from '@/pages/Contact'
import SapBtp from '@/pages/services/SapBtp'
import SapDigitalSupplyChain from '@/pages/solutions/SapDigitalSupplyChain'
import LifeSciences from '@/pages/industries/LifeSciences'
import FaqSapBtp from '@/pages/faqs/FaqSapBtp'
import ExampleCaseStudy from '@/pages/portfolio/ExampleCaseStudy'
import PlaceholderPage from '@/pages/PlaceholderPage'
import NotFound from '@/pages/NotFound'

const queryClient = new QueryClient()

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						{/* Home */}
						<Route path="/" element={<Home />} />

						{/* Services */}
						<Route path="/services" element={<ServicesHub />} />
						<Route path="/services/sap-btp" element={<SapBtp />} />
						<Route
							path="/services/sap-core-enablement"
							element={
								<PlaceholderPage
									title="SAP Core Enablement"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/sap-central-finance"
							element={
								<PlaceholderPage
									title="SAP Central Finance"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/digital-supply-chain"
							element={
								<PlaceholderPage
									title="Digital Supply Chain"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/digital-manufacturing-cloud"
							element={
								<PlaceholderPage
									title="Digital Manufacturing Cloud"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/sap-ewm"
							element={
								<PlaceholderPage
									title="SAP EWM"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/sap-ibp"
							element={
								<PlaceholderPage
									title="SAP IBP"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/sap-transportation-management"
							element={
								<PlaceholderPage
									title="SAP Transportation Management"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/business-transformation-management"
							element={
								<PlaceholderPage
									title="Business Transformation Management"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/migration-services"
							element={
								<PlaceholderPage
									title="Migration Services"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/ams"
							element={
								<PlaceholderPage
									title="AMS"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/tricentis-testing-automation"
							element={
								<PlaceholderPage
									title="Tricentis Testing Automation"
									accentLabel="Services"
								/>
							}
						/>
						<Route
							path="/services/user-experience"
							element={
								<PlaceholderPage
									title="User Experience"
									accentLabel="Services"
								/>
							}
						/>

						{/* Solutions */}
						<Route path="/solutions" element={<SolutionsHub />} />
						<Route
							path="/solutions/sap-digital-supply-chain"
							element={<SapDigitalSupplyChain />}
						/>
						<Route
							path="/solutions/sap-product-lifecycle-management"
							element={
								<PlaceholderPage
									title="SAP Product Lifecycle Management"
									accentLabel="Solutions"
								/>
							}
						/>
						<Route
							path="/solutions/marketing-sales-sap-c4hana"
							element={
								<PlaceholderPage
									title="Marketing and Sales (SAP C/4HANA)"
									accentLabel="Solutions"
								/>
							}
						/>
						<Route
							path="/solutions/spend-management"
							element={
								<PlaceholderPage
									title="Spend Management"
									accentLabel="Solutions"
								/>
							}
						/>
						<Route
							path="/solutions/sap-human-resource-solutions"
							element={
								<PlaceholderPage
									title="SAP Human Resource Solutions"
									accentLabel="Solutions"
								/>
							}
						/>
						<Route
							path="/solutions/asset-management-maintenance-optimization"
							element={
								<PlaceholderPage
									title="Asset Management & Maintenance Optimization"
									accentLabel="Solutions"
								/>
							}
						/>

						{/* Industries */}
						<Route path="/industries" element={<IndustriesHub />} />
						<Route
							path="/industries/life-sciences"
							element={<LifeSciences />}
						/>
						<Route
							path="/industries/consumer-goods"
							element={
								<PlaceholderPage
									title="Consumer Goods"
									accentLabel="Industries"
								/>
							}
						/>
						<Route
							path="/industries/automotive"
							element={
								<PlaceholderPage
									title="Automotive"
									accentLabel="Industries"
								/>
							}
						/>
						<Route
							path="/industries/telecommunications"
							element={
								<PlaceholderPage
									title="Telecommunications"
									accentLabel="Industries"
								/>
							}
						/>
						<Route
							path="/industries/healthcare"
							element={
								<PlaceholderPage
									title="Healthcare"
									accentLabel="Industries"
								/>
							}
						/>
						<Route
							path="/industries/gas-and-oil"
							element={
								<PlaceholderPage
									title="Gas and Oil"
									accentLabel="Industries"
								/>
							}
						/>
						<Route
							path="/industries/chemical"
							element={
								<PlaceholderPage
									title="Chemical"
									accentLabel="Industries"
								/>
							}
						/>

						{/* Resources */}
						<Route
							path="/resources"
							element={
								<PlaceholderPage
									title="Resources"
									accentLabel="Resources"
								/>
							}
						/>
						<Route
							path="/resources/events"
							element={
								<PlaceholderPage
									title="Events"
									accentLabel="Resources"
								/>
							}
						/>
						<Route
							path="/resources/news-room"
							element={
								<PlaceholderPage
									title="News Room"
									accentLabel="Resources"
								/>
							}
						/>
						<Route
							path="/resources/white-papers"
							element={
								<PlaceholderPage
									title="White Papers"
									accentLabel="Resources"
								/>
							}
						/>
						<Route path="/resources/faqs" element={<FAQsHub />} />
						<Route
							path="/resources/faqs/services/sap-btp"
							element={<FaqSapBtp />}
						/>
						<Route
							path="/resources/faqs/:category/:topic"
							element={
								<PlaceholderPage
									title="FAQ Topic"
									accentLabel="FAQs"
								/>
							}
						/>

						{/* Portfolio */}
						<Route
							path="/portfolio"
							element={
								<PlaceholderPage
									title="Portfolio"
									accentLabel="Portfolio"
								/>
							}
						/>
						<Route
							path="/portfolio/case-studies"
							element={<CaseStudiesHub />}
						/>
						<Route
							path="/portfolio/case-studies/example-case-study"
							element={<ExampleCaseStudy />}
						/>
						<Route
							path="/portfolio/case-studies/category/:category"
							element={
								<PlaceholderPage
									title="Case Studies"
									accentLabel="Portfolio"
								/>
							}
						/>
						<Route
							path="/portfolio/products"
							element={
								<PlaceholderPage
									title="Products"
									accentLabel="Portfolio"
								/>
							}
						/>
						<Route
							path="/portfolio/products/category/:category"
							element={
								<PlaceholderPage
									title="Products"
									accentLabel="Portfolio"
								/>
							}
						/>

						{/* Company */}
						<Route
							path="/company"
							element={
								<PlaceholderPage
									title="Company"
									accentLabel="Company"
								/>
							}
						/>
						<Route
							path="/company/about"
							element={
								<PlaceholderPage
									title="About MYGO"
									accentLabel="Company"
								/>
							}
						/>
						<Route
							path="/company/partners"
							element={
								<PlaceholderPage
									title="Partners"
									accentLabel="Company"
								/>
							}
						/>
						<Route
							path="/company/careers"
							element={
								<PlaceholderPage
									title="Careers"
									accentLabel="Company"
								/>
							}
						/>
						<Route
							path="/company/awards"
							element={
								<PlaceholderPage
									title="Awards"
									accentLabel="Company"
								/>
							}
						/>
						<Route path="/company/contact" element={<Contact />} />

						{/* Landing pages */}
						<Route
							path="/lp/:campaignName"
							element={
								<PlaceholderPage
									title="Campaign Landing Page"
									accentLabel="Landing Page"
								/>
							}
						/>

						{/* 404 */}
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
)

export default App
