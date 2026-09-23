<script lang="ts">
	import { COMPANY_INFO } from '$lib/data/content';
</script>

<section class="relative bg-[#0A0A0A] text-white pt-16 pb-20 border-b border-[#262626] overflow-hidden bg-grid-dark">
	<!-- Ambient industrial glows -->
	<div class="absolute -top-24 right-0 w-96 h-96 bg-[#D22F25]/15 rounded-full blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-0 -left-20 w-80 h-80 bg-red-950/20 rounded-full blur-3xl pointer-events-none"></div>

	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-4xl">
			<!-- Monospace status tag -->
			<div class="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#171717] border border-[#2E2E2E] text-xs font-mono text-slate-300 uppercase tracking-widest mb-6">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]"></span>
				<span>{COMPANY_INFO.name} — Performing OQs Nationwide Since 1999</span>
			</div>

			<!-- Main Headline -->
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.08] uppercase text-white mb-6">
				OPERATOR QUALIFICATION <br />
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
					MADE FAST, ACCURATE &amp;
				</span><br />
				<span class="text-[#D22F25]">100% AUDIT-READY.</span>
			</h1>

			<!-- Subtitle -->
			<p class="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
				Born and bred in the oil patch. Either natural gas or hazardous liquid pipelines, we speak your language. 
				Delivering PHMSA 49 CFR 192/195 evaluations through mobile field labs, our dedicated ATAC training centers, and remote proctoring.
			</p>

			<!-- Action CTAs -->
			<div class="flex flex-wrap items-center gap-4 mb-14">
				<a
					href="#quote"
					class="px-7 py-3.5 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-sm uppercase tracking-wider font-bold transition-all shadow-lg shadow-red-950/40 hover:-translate-y-0.5"
				>
					Book Crew Evaluation
				</a>
				<a
					href="#tasks"
					class="px-7 py-3.5 bg-[#171717] hover:bg-[#222222] border border-[#333333] text-white font-mono text-sm uppercase tracking-wider font-semibold transition-all hover:-translate-y-0.5"
				>
					View Covered Tasks
				</a>
			</div>

			<!-- Industrial Metrics Row -->
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#222222]">
				<div class="p-3 bg-[#121212] border-l-2 border-[#D22F25]">
					<div class="text-2xl sm:text-3xl font-heading font-black text-white">25+</div>
					<div class="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Years in Oil Patch</div>
				</div>
				<div class="p-3 bg-[#121212] border-l-2 border-[#D22F25]">
					<div class="text-2xl sm:text-3xl font-heading font-black text-white">100s</div>
					<div class="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Covered Tasks (CCTs)</div>
				</div>
				<div class="p-3 bg-[#121212] border-l-2 border-[#D22F25]">
					<div class="text-2xl sm:text-3xl font-heading font-black text-white">3 WAYS</div>
					<div class="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Mobile, Center &amp; CBT</div>
				</div>
				<div class="p-3 bg-[#121212] border-l-2 border-[#D22F25]">
					<div class="text-2xl sm:text-3xl font-heading font-black text-white">6+</div>
					<div class="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Approved Platforms</div>
				</div>
			</div>
		</div>
	</div>
</section>
