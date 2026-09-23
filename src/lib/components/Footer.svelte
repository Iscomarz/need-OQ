<script lang="ts">
	import { COMPANY_INFO, LOCATIONS } from '$lib/data/content';
</script>

<footer class="bg-[#0A0A0A] text-slate-400 border-t border-[#262626] pt-16 pb-12">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
			<!-- Column 1: Brand & Parent info -->
			<div>
				<div class="flex items-center gap-2 mb-4">
					<div class="w-8 h-8 bg-[#D22F25] flex items-center justify-center font-heading font-black text-white text-sm">
						OQ
					</div>
					<span class="font-heading font-black text-xl text-white tracking-tight">
						NEED OQ<span class="text-[#D22F25]">.</span>
					</span>
				</div>
				<p class="text-xs text-slate-400 font-sans leading-relaxed mb-4">
					{COMPANY_INFO.tagline} Performing nationwide Operator Qualification (OQ) for natural gas and hazardous liquid pipelines since 1999.
				</p>
				<div class="text-xs font-mono text-slate-300">
					Affiliated with <a href="https://safehandssafety.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#D22F25] underline">Safe Hands Safety</a>
				</div>
			</div>

			<!-- Column 2: Quick Links -->
			<div>
				<div class="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
					Navigation
				</div>
				<ul class="space-y-2 text-xs font-mono">
					<li><a href="/oq-pipeline" class="hover:text-white transition-colors">OQ Platforms</a></li>
					<li><a href="/covered-tasks" class="hover:text-white transition-colors">Common Covered Tasks</a></li>
					<li><a href="/locations" class="hover:text-white transition-colors">Training Centers</a></li>
					<li><a href="/accreditations" class="hover:text-white transition-colors">Accreditations</a></li>
					<li><a href="/faq" class="hover:text-white transition-colors">Frequently Asked Questions</a></li>
					<li><a href="/quote" class="text-[#D22F25] font-bold hover:underline">Get an OQ Quote</a></li>
				</ul>
			</div>

			<!-- Column 3: Primary Centers -->
			<div>
				<div class="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
					Key ATAC Facilities
				</div>
				<div class="space-y-4 text-xs font-sans">
					<div>
						<div class="font-bold text-white mb-0.5">{LOCATIONS[0].facilityName}</div>
						<div class="text-slate-400">{LOCATIONS[0].address}</div>
						<div class="font-mono text-slate-300 mt-1">{LOCATIONS[0].phone}</div>
					</div>
					<div>
						<div class="font-bold text-white mb-0.5">{LOCATIONS[1].facilityName}</div>
						<div class="text-slate-400">{LOCATIONS[1].address}</div>
						<div class="font-mono text-slate-300 mt-1">{LOCATIONS[1].phone}</div>
					</div>
				</div>
			</div>

			<!-- Column 4: Contact & Hours -->
			<div>
				<div class="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
					Evaluation Desk
				</div>
				<div class="space-y-2 text-xs font-mono mb-4">
					<div>Phone: <a href="tel:{COMPANY_INFO.phoneRaw}" class="text-white font-bold hover:text-[#D22F25]">{COMPANY_INFO.phone}</a></div>
					<div>Email: <a href="mailto:{COMPANY_INFO.email}" class="text-white hover:text-[#D22F25]">{COMPANY_INFO.email}</a></div>
				</div>
				<div class="text-[11px] font-sans text-slate-400">
					{COMPANY_INFO.hours}
				</div>
			</div>
		</div>

		<!-- Bottom Copyright Row -->
		<div class="pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
			<div>
				© 1999 – {new Date().getFullYear()} Need OQ / Safe Hands Safety. All rights reserved.
			</div>
			<div class="flex items-center gap-6">
				<span>PHMSA 49 CFR 192 / 195</span>
				<span>NCCER Master Evaluator</span>
				<span>Veriforce &amp; EWN</span>
			</div>
		</div>
	</div>
</footer>
