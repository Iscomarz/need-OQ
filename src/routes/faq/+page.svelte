<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import FaqSection from '$lib/components/FaqSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>OQ Rules &amp; Frequently Asked Questions | Need OQ</title>
	<meta
		name="description"
		content="Frequently asked questions about the PHMSA Operator Qualification (OQ) Rule, 49 CFR 192/195, evaluation procedures, and remote proctoring."
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
						<span>Regulatory Guide &amp; Compliance Clarifications</span>
					</div>
					<h1 class="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
						THE OPERATOR QUALIFICATION RULE <br />
						<span class="text-[#D22F25]">&amp; FREQUENTLY ASKED QUESTIONS</span>
					</h1>
					<p class="text-slate-300 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
						Operator qualification is vital for employee safety and pipeline reliability. Here is everything you need to know about regulatory requirements, evaluation intervals, and testing workflows.
					</p>
					<div class="mt-8 flex flex-wrap gap-4">
						<a
							href="/quote"
							class="px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all"
						>
							Ask an Evaluator / Get Quote
						</a>
						<a
							href="/covered-tasks"
							class="px-6 py-3 bg-[#171717] hover:bg-[#222222] border border-[#333333] text-white font-mono text-xs uppercase font-semibold transition-all"
						>
							View Covered Tasks
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Main FAQ Accordion Component -->
		<FaqSection />

		<!-- Regulatory History & AOC Context -->
		<section class="py-16 bg-white border-t border-[#E2E8F0]">
			<div class="container mx-auto px-4 max-w-4xl">
				<div class="text-xs font-mono uppercase tracking-widest text-[#D22F25] font-bold mb-2">
					Regulatory Background
				</div>
				<h2 class="text-2xl sm:text-3xl font-heading font-black uppercase text-[#0F172A] tracking-tight mb-4">
					HISTORY &amp; MANDATE OF THE OQ RULE
				</h2>
				<div class="space-y-4 text-sm text-slate-600 font-sans leading-relaxed">
					<p>
						In August 1999, the Research and Special Programs Administration (RSPA)—now the Pipeline and Hazardous Materials Safety Administration (PHMSA)—issued a final rule establishing qualification requirements for pipeline operating and contractor personnel under <strong>49 CFR Part 192 (Subpart N)</strong> and <strong>49 CFR Part 195 (Subpart G)</strong>.
					</p>
					<p>
						The rule requires operators to develop and implement a written qualification program to evaluate an individual's ability to perform covered tasks and recognize and react to <strong>Abnormal Operating Conditions (AOCs)</strong>.
					</p>
				</div>

				<div class="mt-8 p-6 bg-[#F8F9FA] border border-slate-200">
					<h3 class="font-heading font-bold text-base uppercase text-[#0F172A] mb-2">
						What is an Abnormal Operating Condition (AOC)?
					</h3>
					<p class="text-xs text-slate-600 font-sans leading-relaxed mb-4">
						An AOC is any condition that may indicate a malfunction of a pipeline component, unanticipated pressure spike, hazardous gas release, or deviation from normal operating limits that could pose a threat to people, property, or the environment.
					</p>
					<div class="text-xs font-mono text-slate-700">
						✓ Every Need OQ evaluation includes comprehensive verification of AOC identification and response protocols.
					</div>
				</div>

				<div class="mt-10 text-center">
					<a
						href="/quote"
						class="inline-block px-7 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all"
					>
						Schedule OQ Evaluation Now
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
