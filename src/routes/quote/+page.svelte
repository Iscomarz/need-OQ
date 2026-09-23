<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { COMPANY_INFO, LOCATIONS } from '$lib/data/content';
</script>

<svelte:head>
	<title>Register for Class &amp; OQ Scheduling | Need OQ</title>
	<meta
		name="description"
		content="Schedule your Operator Qualification (OQ) evaluations or safety training courses with Need OQ. Fast turnaround, audit-ready records routed to Joyce Sanchez."
	/>
</svelte:head>

<div class="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans selection:bg-[#D22F25] selection:text-white">
	<Navbar />

	<main>
		<!-- Header Banner -->
		<section class="bg-[#0A0A0A] text-white py-14 border-b border-[#262626] bg-grid-dark">
			<div class="container mx-auto px-4 text-center max-w-3xl">
				<div class="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2E2E2E] text-xs text-slate-300 uppercase tracking-widest mb-4 font-light">
					<span class="w-1.5 h-1.5 rounded-full bg-[#D22F25]"></span>
					<span>Official Registration Portal</span>
				</div>
				<h1 class="text-3xl sm:text-5xl font-light font-heading tracking-tight uppercase mb-3 leading-tight">
					CLASS REGISTRATION &amp; <br />
					<span class="text-[#D22F25] font-normal">OQ SCHEDULING PORTAL</span>
				</h1>
				<p class="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
					Direct coordination for pipeline contractors and operators. Complete the form below to receive a formal schedule and pricing quote.
				</p>
			</div>
		</section>

		<!-- Structured Form -->
		<QuoteSection />

		<!-- Contact & Immediate Assistance Card -->
		<section class="py-12 bg-[#F8F9FA] border-t border-[#E2E8F0]">
			<div class="container mx-auto px-4 max-w-4xl">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
					<div class="bg-white p-6 industrial-box">
						<div class="text-xs uppercase text-slate-400 font-medium mb-1">Direct Phone</div>
						<a href="tel:{COMPANY_INFO.phoneRaw}" class="font-heading font-normal text-lg text-[#D22F25] hover:underline">
							{COMPANY_INFO.phone}
						</a>
						<p class="text-[11px] text-slate-500 font-light mt-1">Available 7 days / week</p>
					</div>

					<div class="bg-white p-6 industrial-box">
						<div class="text-xs uppercase text-slate-400 font-medium mb-1">Evaluation Coordinator</div>
						<div class="font-heading font-normal text-base text-slate-900">Joyce Sanchez</div>
						<a href="mailto:{COMPANY_INFO.email}" class="text-xs text-slate-600 hover:text-[#D22F25] mt-1 block font-light">
							Joyce.Sanchez@SafeHandsSafety.com
						</a>
					</div>

					<div class="bg-white p-6 industrial-box">
						<div class="text-xs uppercase text-slate-400 font-medium mb-1">Main ATAC Center</div>
						<div class="font-heading font-normal text-sm text-slate-900">{LOCATIONS[0].city}, {LOCATIONS[0].state}</div>
						<p class="text-[11px] text-slate-500 font-light mt-1">{LOCATIONS[0].address}</p>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
