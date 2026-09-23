<script lang="ts">
	import { OQ_PLATFORMS } from '$lib/data/content';
</script>

<section id="services" class="py-20 bg-white border-b border-[#E2E8F0]">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mb-14">
			<div class="text-xs font-mono uppercase tracking-widest text-[#D22F25] font-bold mb-2">
				Authorized Databases &amp; Evaluation Systems
			</div>
			<h2 class="text-3xl sm:text-4xl font-heading font-black uppercase text-[#0F172A] tracking-tight mb-4">
				COMPREHENSIVE OQ PLATFORM COMPLIANCE
			</h2>
			<p class="text-slate-600 text-base leading-relaxed">
				Operating companies and prime contractors require specific validation platforms. We hold authorized evaluators across every major standard, saving you from juggling multiple testing vendors.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each OQ_PLATFORMS as platform}
				<div class="industrial-box bg-[#F8F9FA] p-6 hover:border-[#D22F25] transition-colors flex flex-col justify-between">
					<div>
						<div class="flex items-center justify-between mb-4">
							<span class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D22F25] bg-red-50 px-2 py-0.5 border border-red-100">
								{platform.badge}
							</span>
							<span class="w-2 h-2 rounded-full bg-emerald-500" title="Active Authorized Status"></span>
						</div>
						<h3 class="text-xl font-heading font-bold text-[#0F172A] mb-3">
							{platform.name}
						</h3>
						<p class="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
							{platform.description}
						</p>
					</div>

					<div class="pt-4 border-t border-slate-200">
						<div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
							Key Capabilities:
						</div>
						<ul class="space-y-1.5">
							{#each platform.features as feature}
								<li class="text-xs font-mono text-slate-700 flex items-center gap-2">
									<span class="text-[#D22F25] font-bold">›</span>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>

		<!-- Delivery Modes Banner -->
		<div class="mt-12 bg-[#0A0A0A] text-white p-8 border border-[#262626] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
			<div>
				<div class="text-xs font-mono uppercase tracking-widest text-[#D22F25] font-bold mb-1">
					3 Turnkey Delivery Models
				</div>
				<h3 class="text-xl sm:text-2xl font-heading font-bold uppercase text-white mb-2">
					HOW DO YOU WANT YOUR EVALUATION CONDUCTED?
				</h3>
				<p class="text-sm text-slate-300 max-w-2xl font-sans">
					1. <strong>Mobile Labs</strong> directly to your field site. 2. <strong>ATAC Training Centers</strong> in Midland &amp; Corpus Christi. 3. <strong>Remote Proctoring</strong> for computer-based knowledge testing.
				</p>
			</div>
			<div class="flex-shrink-0">
				<a
					href="#quote"
					class="inline-block px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
				>
					Coordinate Deployment
				</a>
			</div>
		</div>
	</div>
</section>
