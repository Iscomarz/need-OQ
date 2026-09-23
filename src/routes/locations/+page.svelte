<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import LocationsSection from '$lib/components/LocationsSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { COMPANY_INFO } from '$lib/data/content';
</script>

<svelte:head>
	<title>ATAC Training Centers &amp; Locations | Need OQ</title>
	<meta
		name="description"
		content="Visit our Authorized Training and Assessment Centers (ATAC) in Midland and Corpus Christi, TX, or request mobile on-site field testing nationwide."
	/>
</svelte:head>

<div class="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans selection:bg-[#D22F25] selection:text-white">
	<Navbar />

	<main>
		<!-- Header Banner -->
		<section class="bg-[#0A0A0A] text-white py-16 border-b border-[#262626] bg-grid-dark">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl">
					<div class="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2E2E2E] text-xs text-slate-300 uppercase tracking-widest mb-4 font-light">
						<span class="w-1.5 h-1.5 rounded-full bg-[#D22F25]"></span>
						<span>Fixed ATAC Facilities &amp; Mobile Field Deployment</span>
					</div>
					<h1 class="text-3xl sm:text-5xl font-light font-heading tracking-tight uppercase mb-4 leading-tight">
						TRAINING CENTERS &amp; <br />
						<span class="text-[#D22F25] font-normal">NATIONWIDE FIELD DEPLOYMENT</span>
					</h1>
					<p class="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
						Whether your technicians visit our dedicated evaluation centers in Texas or require rapid mobile testing dispatched directly to your job site or pipeline right-of-way, we have you covered.
					</p>
					<div class="mt-8 flex flex-wrap gap-4">
						<a
							href="/quote"
							class="px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs uppercase font-medium tracking-wider transition-all"
						>
							Request Location Scheduling
						</a>
						<a
							href="tel:{COMPANY_INFO.phoneRaw}"
							class="px-6 py-3 bg-[#171717] hover:bg-[#222222] border border-[#333333] text-white text-xs uppercase font-normal transition-all flex items-center gap-2"
						>
							<span>Call Direct: {COMPANY_INFO.phone}</span>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Locations Directory -->
		<LocationsSection />

		<!-- On-Site Field Dispatch Section -->
		<section class="py-16 bg-[#F8F9FA] border-t border-[#E2E8F0]">
			<div class="container mx-auto px-4 max-w-4xl">
				<div class="text-xs uppercase tracking-widest text-[#D22F25] font-medium mb-2">
					Mobile Testing Laboratory Advantage
				</div>
				<h2 class="text-2xl sm:text-3xl font-heading font-light uppercase text-[#0F172A] tracking-tight mb-4">
					HOW OUR MOBILE DISPATCH WORKS
				</h2>
				<p class="text-slate-600 text-sm font-light leading-relaxed mb-6">
					Transporting 20 technicians from a remote field site to a city testing center wastes tens of thousands of dollars in lost billable hours, per diems, and fuel. Our mobile evaluators bring test rigs, calibrated sensors, and exam terminals directly to your location.
				</p>

				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
					<div class="p-5 bg-white industrial-box">
						<div class="text-xs font-medium text-[#D22F25] mb-1">STEP 1</div>
						<div class="font-heading font-normal text-[#0F172A] mb-1">Coordinate Date &amp; Matrix</div>
						<p class="text-xs text-slate-600 font-light leading-relaxed">
							Provide your list of covered tasks and target pipeline operator requirements.
						</p>
					</div>

					<div class="p-5 bg-white industrial-box">
						<div class="text-xs font-medium text-[#D22F25] mb-1">STEP 2</div>
						<div class="font-heading font-normal text-[#0F172A] mb-1">On-Site Evaluation</div>
						<p class="text-xs text-slate-600 font-light leading-relaxed">
							Our Master Evaluator conducts hands-on skill performance and proctored testing on your schedule.
						</p>
					</div>

					<div class="p-5 bg-white industrial-box">
						<div class="text-xs font-medium text-[#D22F25] mb-1">STEP 3</div>
						<div class="font-heading font-normal text-[#0F172A] mb-1">Immediate Verification</div>
						<p class="text-xs text-slate-600 font-light leading-relaxed">
							Completed tasks are signed off and submitted into Veriforce, EWN, or NCCER within 24–48 hours.
						</p>
					</div>
				</div>

				<div class="text-center">
					<a
						href="/quote"
						class="inline-block px-8 py-3.5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs uppercase font-medium tracking-wider transition-all"
					>
						Schedule Mobile Unit to Your Job Site
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
