<script lang="ts">
	import { COMPANY_INFO } from '$lib/data/content';

	let requestedClass = $state('Operator Qualification (OQ) Pipeline Evaluation');
	let preferredDateTime = $state('');
	let company = $state('');
	let location = $state('');
	let participantsCount = $state<number>(1);
	let studentNames = $state('');
	let oqPlatform = $state('Veriforce');
	let oqTasks = $state('');
	let equipmentNeeds = $state('');

	// Submitter contact info
	let contactName = $state('');
	let contactEmail = $state('');
	let contactPhone = $state('');
	let honeypot = $state('');

	// UI states
	let isSubmitting = $state(false);
	let submitted = $state(false);
	let errorMessage = $state('');

	const classOptions = [
		'Operator Qualification (OQ) Pipeline Evaluation (PHMSA 192/195)',
		'NCCER Pipeline Assessment & Certification',
		'Basin United Safety Orientation',
		'SafeLandUSA / SafeGulf Orientation',
		'PEC H2S Clear Training & Certification',
		'Authorized Manlift & Forklift Operator Training',
		'Damage Prevention & 811 Excavation Standards',
		'Operator-Specific Custom Task Matrix'
	];

	const platformOptions = [
		'Veriforce',
		'Energy Worldnet (EWN)',
		'NCCER National Registry',
		'MEA Energy Association',
		'ITS (Industrial Training Services)',
		'OQSG',
		'Multiple / Other Platform'
	];

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (honeypot) return; // Silent discard for bots

		isSubmitting = true;
		errorMessage = '';

		try {
			const res = await fetch('/api/quote', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					requestedClass,
					preferredDateTime,
					company,
					location,
					participantsCount,
					studentNames,
					oqPlatform,
					oqTasks,
					equipmentNeeds,
					contactName,
					contactEmail,
					contactPhone,
					honeypot
				})
			});

			const data = await res.json();

			if (!res.ok) {
				errorMessage = data.error || 'Failed to submit registration. Please try again.';
			} else {
				submitted = true;
			}
		} catch (err: unknown) {
			errorMessage = 'Network error. Please check your connection or contact our team directly.';
		} finally {
			isSubmitting = false;
		}
	}

	function resetForm() {
		submitted = false;
		requestedClass = classOptions[0];
		preferredDateTime = '';
		company = '';
		location = '';
		participantsCount = 1;
		studentNames = '';
		oqPlatform = platformOptions[0];
		oqTasks = '';
		equipmentNeeds = '';
		contactName = '';
		contactEmail = '';
		contactPhone = '';
		errorMessage = '';
	}
</script>

<section id="quote" class="py-20 bg-white border-b border-[#E2E8F0]">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-12">
				<div class="text-xs font-mono uppercase tracking-widest text-[#D22F25] font-bold mb-2">
					Official Registration &amp; Scheduling Portal
				</div>
				<h2 class="text-3xl sm:text-4xl font-heading font-black uppercase text-[#0F172A] tracking-tight">
					CLASS REGISTRATION &amp; OQ SCHEDULING
				</h2>
				<p class="text-sm text-slate-600 font-sans max-w-2xl mx-auto mt-3">
					Fill out the details below. Requests are routed directly to <strong>Joyce Sanchez</strong> and our evaluation coordination team for immediate scheduling.
				</p>
			</div>

			<div class="industrial-card bg-[#F8F9FA] p-6 sm:p-10">
				{#if submitted}
					<div class="py-12 text-center">
						<div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
							✓
						</div>
						<h3 class="text-2xl font-heading font-black uppercase text-slate-900 mb-2">
							Registration Received
						</h3>
						<p class="text-sm text-slate-600 font-sans max-w-lg mx-auto mb-2">
							Your request for <strong>{requestedClass}</strong> for <strong>{company}</strong> has been transmitted directly to Joyce Sanchez.
						</p>
						<p class="text-xs text-slate-500 font-mono mb-8">
							Confirmation sent for {participantsCount} participant(s). We will contact you at {contactEmail} shortly.
						</p>
						<button
							type="button"
							onclick={resetForm}
							class="px-6 py-2.5 bg-[#0A0A0A] hover:bg-[#222222] text-white text-xs font-mono uppercase font-bold tracking-wider transition-all"
						>
							Submit Another Class / Evaluation
						</button>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-6">
						<!-- Anti-spam honeypot -->
						<div class="hidden" aria-hidden="true">
							<input type="text" name="website_url_hp" bind:value={honeypot} tabindex="-1" autocomplete="off" />
						</div>

						{#if errorMessage}
							<div class="p-4 bg-red-50 border-l-4 border-[#D22F25] text-red-800 text-xs font-mono">
								<strong>Error:</strong> {errorMessage}
							</div>
						{/if}

						<!-- Section 1: Course & Logistics -->
						<div>
							<div class="text-xs font-mono uppercase font-bold text-[#D22F25] tracking-wider mb-3 pb-1 border-b border-slate-200">
								1. Course &amp; Logistics Details
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label for="requestedClass" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Requested Class *
									</label>
									<select
										id="requestedClass"
										required
										bind:value={requestedClass}
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									>
										{#each classOptions as option}
											<option value={option}>{option}</option>
										{/each}
									</select>
								</div>

								<div>
									<label for="preferredDateTime" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Preferred Dates / Times *
									</label>
									<input
										id="preferredDateTime"
										type="text"
										required
										bind:value={preferredDateTime}
										placeholder="e.g. Oct 15-16, Morning 8:00 AM or As Soon As Possible"
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>

								<div>
									<label for="company" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Company *
									</label>
									<input
										id="company"
										type="text"
										required
										bind:value={company}
										placeholder="Contractor or Operator Name"
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>

								<div>
									<label for="location" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Location *
									</label>
									<input
										id="location"
										type="text"
										required
										bind:value={location}
										placeholder="e.g. Job Site (Midland/Odessa), Corpus Christi ATAC, etc."
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>
							</div>
						</div>

						<!-- Section 2: Participants & OQ Specifics -->
						<div>
							<div class="text-xs font-mono uppercase font-bold text-[#D22F25] tracking-wider mb-3 pb-1 border-b border-slate-200">
								2. Participants &amp; Operator Qualification Specifications
							</div>
							<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
								<div>
									<label for="participantsCount" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Number of Participants *
									</label>
									<input
										id="participantsCount"
										type="number"
										min="1"
										max="250"
										required
										bind:value={participantsCount}
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>

								<div>
									<label for="oqPlatform" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										OQ Platform
									</label>
									<select
										id="oqPlatform"
										bind:value={oqPlatform}
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									>
										{#each platformOptions as platform}
											<option value={platform}>{platform}</option>
										{/each}
									</select>
								</div>

								<div>
									<label for="oqTasks" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										OQ Tasks
									</label>
									<input
										id="oqTasks"
										type="text"
										bind:value={oqTasks}
										placeholder="e.g. CCT 01, CCT 02, Valves, Ultrasonic"
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>
							</div>

							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label for="studentNames" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Student Names (List all participants)
									</label>
									<textarea
										id="studentNames"
										rows="4"
										bind:value={studentNames}
										placeholder="Enter one student per line:&#10;1. John Doe&#10;2. Jane Smith"
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									></textarea>
								</div>

								<div>
									<label for="equipmentNeeds" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Equipment Needs
									</label>
									<textarea
										id="equipmentNeeds"
										rows="4"
										bind:value={equipmentNeeds}
										placeholder="Describe any specialized PPE, test rigs, mobile trailer power, or props required..."
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									></textarea>
								</div>
							</div>
						</div>

						<!-- Section 3: Contact & Submitter Information -->
						<div>
							<div class="text-xs font-mono uppercase font-bold text-[#D22F25] tracking-wider mb-3 pb-1 border-b border-slate-200">
								3. Submitter / Coordinator Contact Information
							</div>
							<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div>
									<label for="contactName" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Contact Name *
									</label>
									<input
										id="contactName"
										type="text"
										required
										bind:value={contactName}
										placeholder="Your Full Name"
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>

								<div>
									<label for="contactEmail" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Work Email *
									</label>
									<input
										id="contactEmail"
										type="email"
										required
										bind:value={contactEmail}
										placeholder="name@company.com"
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>

								<div>
									<label for="contactPhone" class="block text-xs font-mono uppercase font-semibold text-slate-700 mb-1">
										Direct Phone *
									</label>
									<input
										id="contactPhone"
										type="tel"
										required
										bind:value={contactPhone}
										placeholder="(555) 000-0000"
										class="w-full bg-white border border-slate-300 p-2.5 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#D22F25]"
									/>
								</div>
							</div>
						</div>

						<div class="pt-2">
							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full py-4 bg-[#D22F25] hover:bg-[#EB392F] disabled:opacity-50 text-white font-mono text-sm uppercase font-bold tracking-wider transition-all shadow-md hover:-translate-y-0.5"
							>
								{isSubmitting ? 'Transmitting Request to Joyce Sanchez...' : 'Submit Class & OQ Request'}
							</button>
							<div class="flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-slate-400 mt-2 gap-2">
								<span>🔒 Direct dispatch to Joyce.Sanchez@SafeHandsSafety.com</span>
								<span>Need immediate help? Call {COMPANY_INFO.phone}</span>
							</div>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
