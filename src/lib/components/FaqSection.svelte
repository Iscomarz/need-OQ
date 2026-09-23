<script lang="ts">
	import { FAQS } from '$lib/data/content';

	let openIndex = $state<number | null>(0);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<section id="faq" class="py-20 bg-[#F8F9FA] border-b border-[#E2E8F0]">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="text-center mb-12">
			<div class="text-xs uppercase tracking-widest text-[#D22F25] font-medium mb-2">
				Clarifications &amp; Regulations
			</div>
			<h2 class="text-3xl sm:text-4xl font-heading font-light uppercase text-[#0F172A] tracking-tight">
				OPERATOR QUALIFICATION FAQS
			</h2>
		</div>

		<div class="space-y-3">
			{#each FAQS as faq, i}
				<div class="bg-white border border-slate-200 overflow-hidden">
					<button
						type="button"
						onclick={() => toggle(i)}
						class="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
					>
						<span class="font-heading font-normal text-base text-[#0F172A]">
							{faq.question}
						</span>
						<span class="text-[#D22F25] text-xl font-light">
							{openIndex === i ? '−' : '+'}
						</span>
					</button>

					{#if openIndex === i}
						<div class="px-5 pb-5 pt-1 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100">
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
