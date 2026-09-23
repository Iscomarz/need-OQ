<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import AccreditationsMarquee from '$lib/components/AccreditationsMarquee.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const accreditationDetails = [
		{
			title: 'Basin United Safety Orientation',
			role: 'Authorized Provider',
			desc: 'Standardized safety orientation designed specifically for Permian Basin oil and gas upstream and midstream operations, eliminating duplicative site training.',
			audience: 'Exploration, drilling, completions, midstream pipeline contractors.'
		},
		{
			title: 'SafeLandUSA & SafeGulf',
			role: 'Authorized Trainer',
			desc: 'Nationally recognized standard safety orientations for onshore (SafeLand) and offshore (SafeGulf) petroleum and chemical facilities.',
			audience: 'Roustabouts, rig crews, pipeline inspectors, chemical plant service providers.'
		},
		{
			title: 'Gold Shovel Standard (GSS)',
			role: 'Certified Training Center',
			desc: 'First-of-its-kind excavation safety and damage prevention program designed to eliminate utility strikes and pipeline rupture risks.',
			audience: 'Excavation contractors, directional drillers, trenching crews, pipeline right-of-way teams.'
		},
		{
			title: 'PEC H2S Clear',
			role: 'Certified Instructor',
			desc: 'Comprehensive 4-hour course on the chemical properties, respiratory protection, emergency response, and monitors for Hydrogen Sulfide (sour gas) environments.',
			audience: 'Any personnel entering designated sour gas fields or H2S potential pipeline areas.'
		},
		{
			title: 'Authorized Manlift & Forklift',
			role: 'Authorized Training Center',
			desc: 'OSHA-compliant classroom instruction and hands-on practical operation evaluations for aerial work platforms, scissor lifts, boom lifts, and powered industrial trucks.',
			audience: 'Facility technicians, yard workers, maintenance and turnaround personnel.'
		},
		{
			title: 'Damage Prevention & 811',
			role: 'Call Before You Dig Partner',
			desc: 'Crucial underground infrastructure protection training ensuring full compliance with state and federal 811 notification laws prior to any ground disturbance.',
			audience: 'Field crews, line locators, pipeline construction managers.'
		}
	];
</script>

<svelte:head>
	<title>Accreditations &amp; Safety Programs | Need OQ</title>
	<meta
		name="description"
		content="Authorized provider of Basin United, SafeLandUSA, SafeGulf, Gold Shovel Standard, PEC H2S Clear, and OSHA Aerial Lift &amp; Forklift training."
	/>
</svelte:head>

<div class="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans selection:bg-[#D22F25] selection:text-white">
	<Navbar />

	<main>
		<!-- Header Banner -->
		<section class="bg-[#0A0A0A] text-white py-16 border-b border-[#262626] bg-grid-dark">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl">
					<div class="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2E2E2E] text-xs font-mono text-slate-300 uppercase tracking-widest mb-4">
						<span class="w-2 h-2 rounded-full bg-[#D22F25]"></span>
						<span>Authorized Safety Certifications</span>
					</div>
					<h1 class="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
						ACCREDITATIONS &amp; <br />
						<span class="text-[#D22F25]">INDUSTRY SAFETY SPONSORS</span>
					</h1>
					<p class="text-slate-300 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
						Meeting operator master service agreements (MSAs) requires certified safety credentials. Need OQ delivers fully authorized programs recognized by leading energy producers.
					</p>
					<div class="mt-8 flex flex-wrap gap-4">
						<a
							href="/quote"
							class="px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all"
						>
							Register for Class
						</a>
						<a
							href="/locations"
							class="px-6 py-3 bg-[#171717] hover:bg-[#222222] border border-[#333333] text-white font-mono text-xs uppercase font-semibold transition-all"
						>
							View Training Centers
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Marquee Banner -->
		<AccreditationsMarquee />

		<!-- Detailed Cards -->
		<section class="py-20 bg-white border-b border-[#E2E8F0]">
			<div class="container mx-auto px-4">
				<div class="max-w-3xl mb-12">
					<div class="text-xs font-mono uppercase tracking-widest text-[#D22F25] font-bold mb-2">
						Authorized Course Catalog
					</div>
					<h2 class="text-3xl font-heading font-black uppercase text-[#0F172A] tracking-tight">
						SAFETY COURSES FOR OPERATOR COMPLIANCE
					</h2>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each accreditationDetails as item}
						<div class="industrial-card bg-[#F8F9FA] p-6 flex flex-col justify-between hover:border-[#D22F25] transition-colors">
							<div>
								<div class="flex items-center justify-between mb-3">
									<span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D22F25] bg-red-50 px-2 py-0.5 border border-red-100">
										{item.role}
									</span>
								</div>
								<h3 class="text-lg font-heading font-bold text-[#0F172A] mb-2 leading-snug">
									{item.title}
								</h3>
								<p class="text-xs text-slate-600 font-sans leading-relaxed mb-4">
									{item.desc}
								</p>
							</div>

							<div class="pt-4 border-t border-slate-200">
								<div class="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-1">
									Target Audience:
								</div>
								<p class="text-xs font-mono text-slate-700">
									{item.audience}
								</p>
							</div>
						</div>
					{/each}
				</div>

				<!-- Fast CTA Strip -->
				<div class="mt-12 p-8 bg-[#0A0A0A] text-white border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6">
					<div>
						<h3 class="text-xl font-heading font-bold uppercase text-white mb-1">
							Need a Combo Safety &amp; OQ Evaluation Package?
						</h3>
						<p class="text-xs text-slate-300 font-sans">
							Save crew travel time by scheduling Basin United or H2S Clear alongside your technician OQ evaluations.
						</p>
					</div>
					<a
						href="/quote"
						class="whitespace-nowrap px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-xs uppercase font-bold tracking-wider"
					>
						Book Combined Session
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
