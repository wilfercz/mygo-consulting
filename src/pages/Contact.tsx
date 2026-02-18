import { useState } from 'react'
import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'

const Contact = () => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	})
	const [errors, setErrors] = useState<Record<string, string>>({})
	const [submitted, setSubmitted] = useState(false)

	const validate = () => {
		const e: Record<string, string> = {}
		if (!form.firstName.trim()) e.firstName = 'First name is required'
		if (!form.email.trim()) e.email = 'Email is required'
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			e.email = 'Enter a valid corporate email'
		return e
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const v = validate()
		if (Object.keys(v).length) {
			setErrors(v)
			return
		}
		setErrors({})
		setSubmitted(true)
	}

	return (
		<>
			<section className="bg-mygo-dark-blue py-24 md:py-32">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
						<div>
							<span className="font-accent text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
								Contact
							</span>
							<h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
								Let's Get in Touch…
							</h1>
							<p className="text-lg text-primary-foreground/70 leading-relaxed">
								Whether you're planning an SAP transformation,
								exploring new solutions, or need expert guidance
								— our team is ready to help. Reach out and let's
								start the conversation.
							</p>
						</div>

						<div className="bg-mygo-teal p-8 md:p-10">
							{submitted ? (
								<div className="text-center py-12">
									<h3 className="text-xl font-bold text-primary-foreground mb-3">
										Thank You
									</h3>
									<p className="text-primary-foreground/70">
										We'll be in touch shortly.
									</p>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div>
										<label className="block text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
											First Name *
										</label>
										<input
											type="text"
											value={form.firstName}
											onChange={(e) =>
												setForm({
													...form,
													firstName: e.target.value,
												})
											}
											className="w-full px-4 py-3 bg-background text-foreground border-0 text-sm focus:ring-2 focus:ring-accent outline-none"
										/>
										{errors.firstName && (
											<p className="text-accent text-xs mt-1">
												{errors.firstName}
											</p>
										)}
									</div>
									<div>
										<label className="block text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
											Last Name
										</label>
										<input
											type="text"
											value={form.lastName}
											onChange={(e) =>
												setForm({
													...form,
													lastName: e.target.value,
												})
											}
											className="w-full px-4 py-3 bg-background text-foreground border-0 text-sm focus:ring-2 focus:ring-accent outline-none"
										/>
									</div>
									<div>
										<label className="block text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
											Corporate Email *
										</label>
										<input
											type="email"
											value={form.email}
											onChange={(e) =>
												setForm({
													...form,
													email: e.target.value,
												})
											}
											className="w-full px-4 py-3 bg-background text-foreground border-0 text-sm focus:ring-2 focus:ring-accent outline-none"
										/>
										{errors.email && (
											<p className="text-accent text-xs mt-1">
												{errors.email}
											</p>
										)}
									</div>
									<div>
										<label className="block text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
											Message
										</label>
										<textarea
											rows={4}
											value={form.message}
											onChange={(e) =>
												setForm({
													...form,
													message: e.target.value,
												})
											}
											className="w-full px-4 py-3 bg-background text-foreground border-0 text-sm focus:ring-2 focus:ring-accent outline-none resize-none"
										/>
									</div>
									<button
										type="submit"
										className="w-full px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors rounded-sm text-sm uppercase tracking-wider"
									>
										Contact Us
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
