<script lang="ts">
	import { ACCREDITATIONS } from '$lib/data/content';
</script>

<section id="accreditations" class="py-16 bg-[#0A0A0A] text-white border-b border-[#262626]">
	<div class="container mx-auto px-4 mb-8 text-center">
		<div class="text-xs uppercase tracking-widest text-[#D22F25] font-medium mb-2">
			Industry Recognized Certifications
		</div>
		<h2 class="text-2xl sm:text-3xl font-heading font-light uppercase tracking-tight text-white">
			AUTHORIZED CREDENTIALS &amp; SAFETY SPONSORS
		</h2>
	</div>

	<div class="container mx-auto px-4">
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
			{#each ACCREDITATIONS as item}
				<div class="p-4 bg-[#141414] border border-[#262626] text-center hover:border-[#D22F25] transition-colors flex flex-col justify-center items-center h-28">
					<div class="text-sm font-heading font-normal text-white mb-1.5 uppercase tracking-tight">
						{item.name}
					</div>
					<div class="text-[10px] text-[#D22F25] uppercase tracking-wider font-light">
						{item.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
