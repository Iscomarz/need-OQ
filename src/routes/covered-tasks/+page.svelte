<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CoveredTasksSection from '$lib/components/CoveredTasksSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Common Covered Tasks (CCTs) | Need OQ</title>
	<meta
		name="description"
		content="Explore hundreds of pipeline Common Covered Tasks (CCTs) under PHMSA 49 CFR 192 &amp; 195. Breakout tanks, valves, ultrasonic wall thickness, and pipeline integrity."
	/>
</svelte:head>

<div class="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans selection:bg-[#D22F25] selection:text-white">
	<Navbar />

	<main>
		<!-- Page Header Banner -->
		<section class="bg-[#0A0A0A] text-white py-16 border-b border-[#262626] bg-grid-dark">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl">
					<div class="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2E2E2E] text-xs text-slate-300 uppercase tracking-widest mb-4 font-light">
						<span class="w-1.5 h-1.5 rounded-full bg-[#D22F25]"></span>
						<span>PHMSA Four-Part Test Compliant</span>
					</div>
					<h1 class="text-3xl sm:text-5xl font-light font-heading tracking-tight uppercase mb-4 leading-tight">
						COMMON COVERED TASKS (CCTS) <br />
						<span class="text-[#D22F25] font-normal">&amp; EVALUATION MATRIX</span>
					</h1>
					<p class="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
						An operator is responsible for qualifying personnel performing any task that: 1. Is performed on a pipeline facility, 2. Is an operations or maintenance task, 3. Is performed as a requirement of 49 CFR, and 4. Affects pipeline integrity or safety.
					</p>
					<div class="mt-8 flex flex-wrap gap-4">
						<a
							href="/quote"
							class="px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs uppercase font-medium tracking-wider transition-all"
						>
							Register for Task Evaluation
						</a>
						<a
							href="/oq-pipeline"
							class="px-6 py-3 bg-[#171717] hover:bg-[#222222] border border-[#333333] text-white text-xs uppercase font-normal transition-all"
						>
							View Evaluation Platforms
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Interactive Task Catalog -->
		<CoveredTasksSection />

		<!-- Explanatory Box on Covered Tasks -->
		<section class="py-16 bg-white border-t border-[#E2E8F0]">
			<div class="container mx-auto px-4 max-w-4xl">
				<div class="text-xs uppercase tracking-widest text-[#D22F25] font-medium mb-2">
					Understanding the PHMSA 4-Part Rule
				</div>
				<h2 class="text-2xl sm:text-3xl font-heading font-light uppercase text-[#0F172A] tracking-tight mb-6">
					HOW IS A COVERED TASK DETERMINED?
				</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
					<div class="p-4 bg-[#F8F9FA] border border-slate-200">
						<div class="text-xs font-medium text-[#D22F25] mb-1">PART 1</div>
						<div class="font-heading font-normal text-[#0F172A] mb-1">Performed on Pipeline Facility</div>
						<p class="text-xs text-slate-600 font-light leading-relaxed">
							The activity takes place directly on piping, breakout storage, compression, or metering facilities.
						</p>
					</div>

					<div class="p-4 bg-[#F8F9FA] border border-slate-200">
						<div class="text-xs font-medium text-[#D22F25] mb-1">PART 2</div>
						<div class="font-heading font-normal text-[#0F172A] mb-1">Operations or Maintenance</div>
						<p class="text-xs text-slate-600 font-light leading-relaxed">
							Routine or preventative maintenance, monitoring, valve ops, calibrations, or emergency response tasks.
						</p>
					</div>

					<div class="p-4 bg-[#F8F9FA] border border-slate-200">
						<div class="text-xs font-medium text-[#D22F25] mb-1">PART 3</div>
						<div class="font-heading font-normal text-[#0F172A] mb-1">CFR 192 / 195 Requirement</div>
						<p class="text-xs text-slate-600 font-light leading-relaxed">
							Mandated by federal pipeline safety codes for gas transportation or hazardous liquid pipelines.
						</p>
					</div>

					<div class="p-4 bg-[#F8F9FA] border border-slate-200">
						<div class="text-xs font-medium text-[#D22F25] mb-1">PART 4</div>
						<div class="font-heading font-normal text-[#0F172A] mb-1">Affects Integrity or Safety</div>
						<p class="text-xs text-slate-600 font-light leading-relaxed">
							Improper execution could compromise pipeline containment, mechanical integrity, or public safety.
						</p>
					</div>
				</div>

				<div class="p-6 bg-[#0A0A0A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
					<div>
						<div class="font-heading font-light text-lg uppercase text-white mb-1">Need a custom task matrix evaluated?</div>
						<p class="text-xs text-slate-300 font-light">We evaluate proprietary operating company tasks with Master Evaluator sign-offs.</p>
					</div>
					<a
						href="/quote"
						class="whitespace-nowrap px-6 py-2.5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs uppercase font-medium tracking-wider"
					>
						Schedule Custom Tasks
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
