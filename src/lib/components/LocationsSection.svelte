<script lang="ts">
	import { LOCATIONS, COMPANY_INFO } from '$lib/data/content';
</script>

<section id="locations" class="py-20 bg-white border-b border-[#E2E8F0]">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mb-12">
			<div class="text-xs uppercase tracking-widest text-[#D22F25] font-medium mb-2">
				Regional Facilities &amp; In-Field Coverage
			</div>
			<h2 class="text-3xl sm:text-4xl font-heading font-light uppercase text-[#0F172A] tracking-tight mb-4">
				WHERE WE QUALIFY YOUR CREWS
			</h2>
			<p class="text-slate-600 text-base leading-relaxed font-light">
				Visit our Authorized Training and Assessment Centers (ATAC) or schedule our mobile testing units anywhere across the Permian Basin, Eagle Ford, Gulf Coast, and nationwide.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each LOCATIONS as loc}
				<div class="industrial-box p-6 bg-[#F8F9FA] relative {loc.isPrimary ? 'border-[#D22F25] ring-1 ring-[#D22F25]' : ''}">
					{#if loc.isPrimary}
						<span class="absolute top-4 right-4 text-[10px] uppercase font-medium text-white bg-[#D22F25] px-2 py-0.5">
							Main ATAC Facility
						</span>
					{/if}
					<div class="text-xs text-slate-400 uppercase tracking-wider mb-1 font-light">
						{loc.city}, {loc.state}
					</div>
					<h3 class="text-lg font-heading font-normal text-[#0F172A] mb-2">
						{loc.facilityName}
					</h3>
					<p class="text-sm text-slate-600 font-light mb-4">
						{loc.address}
					</p>
					<div class="pt-4 border-t border-slate-200 text-xs font-light space-y-1">
						<div class="text-slate-700">
							<span class="text-slate-400">Phone:</span> {loc.phone}
						</div>
						<div class="text-slate-700">
							<span class="text-slate-400">Email:</span> {loc.email}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Direct call box -->
		<div class="mt-10 p-6 bg-red-50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
			<div>
				<div class="text-xs uppercase font-medium text-[#D22F25] mb-1">
					Need immediate field dispatch or directions?
				</div>
				<p class="text-sm text-slate-700 font-light">
					Our evaluators are on call 7 days a week. We can deploy mobile testing to your location within 24–48 hours.
				</p>
			</div>
			<a
				href="tel:{COMPANY_INFO.phoneRaw}"
				class="whitespace-nowrap px-5 py-2.5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs uppercase font-medium tracking-wider"
			>
				Call {COMPANY_INFO.phone}
			</a>
		</div>
	</div>
</section>
