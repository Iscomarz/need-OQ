<script lang="ts">
	import { VALUE_PROPOSITIONS } from '$lib/data/content';
</script>

<section class="py-16 bg-[#F8F9FA] border-b border-[#E2E8F0] bg-grid-tech">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
			<div>
				<div class="text-xs uppercase tracking-widest text-[#D22F25] font-medium mb-2">
					Why Field Leaders Trust Need OQ
				</div>
				<h2 class="text-3xl sm:text-4xl font-heading font-light uppercase text-[#0F172A] tracking-tight">
					BUILT FOR TOUGH PIPELINE SCHEDULES
				</h2>
			</div>
			<div class="mt-4 md:mt-0 text-sm text-slate-500 font-light">
				Zero unnecessary delays • Audit-defensible documentation
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each VALUE_PROPOSITIONS as prop, i}
				<div class="industrial-card bg-white p-6 relative group hover:shadow-md transition-shadow">
					<div class="flex justify-between items-center mb-4">
						<span class="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-slate-100 text-slate-700 font-normal border border-slate-200">
							{prop.tag}
						</span>
						<span class="text-xs font-light text-slate-400">
							0{i + 1}
						</span>
					</div>
					<h3 class="text-lg font-heading font-normal text-[#0F172A] mb-2 leading-snug">
						{prop.title}
					</h3>
					<p class="text-sm text-slate-600 leading-relaxed font-light">
						{prop.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
