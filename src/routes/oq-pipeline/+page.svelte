<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import PlatformsSection from '$lib/components/PlatformsSection.svelte';
	import ValueProps from '$lib/components/ValueProps.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>OQ &amp; Pipeline Platforms | Need OQ</title>
	<meta
		name="description"
		content="Authorized Operator Qualification (OQ) evaluations across Veriforce, Energy WorldNet (EWN), NCCER, MEA, ITS, and OQSG under PHMSA 49 CFR 192/195."
	/>
</svelte:head>

<div class="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans selection:bg-[#D22F25] selection:text-white">
	<Navbar />

	<main>
		<!-- Page Header Banner -->
		<section class="bg-[#0A0A0A] text-white py-16 border-b border-[#262626] bg-grid-dark">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl">
					<div class="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2E2E2E] text-xs font-mono text-slate-300 uppercase tracking-widest mb-4">
						<span class="w-2 h-2 rounded-full bg-[#D22F25]"></span>
						<span>PHMSA Part 192 &amp; Part 195 Regulatory Compliance</span>
					</div>
					<h1 class="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
						OPERATOR QUALIFICATION (OQ) <br />
						<span class="text-[#D22F25]">PLATFORMS &amp; EVALUATION SYSTEMS</span>
					</h1>
					<p class="text-slate-300 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
						We partner with all major operator databases to ensure seamless credential verification, rapid field sign-offs, and 100% audit-defensible records for your pipeline workforce.
					</p>
					<div class="mt-8 flex flex-wrap gap-4">
						<a
							href="/quote"
							class="px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all"
						>
							Schedule Platform Evaluation
						</a>
						<a
							href="/covered-tasks"
							class="px-6 py-3 bg-[#171717] hover:bg-[#222222] border border-[#333333] text-white font-mono text-xs uppercase font-semibold transition-all"
						>
							Browse Covered Tasks
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Main Platform Directory -->
		<PlatformsSection />

		<!-- Core Value Props -->
		<ValueProps />

		<!-- Direct CTA Strip -->
		<section class="py-12 bg-white border-t border-[#E2E8F0]">
			<div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
				<div>
					<h2 class="text-xl sm:text-2xl font-heading font-black uppercase text-[#0F172A] mb-1">
						Ready to Qualify Your Techs on a Specific Platform?
					</h2>
					<p class="text-sm text-slate-600 font-sans">
						Same-week slots available at our ATAC centers or mobile field deployment.
					</p>
				</div>
				<a
					href="/quote"
					class="px-7 py-3.5 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all shrink-0"
				>
					Request Booking Quote
				</a>
			</div>
		</section>
	</main>

	<Footer />
</div>
