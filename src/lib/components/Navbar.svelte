<script lang="ts">
	import { COMPANY_INFO } from '$lib/data/content';

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header class="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#262626] text-white">
	<!-- Top notification bar -->
	<div class="bg-[#D22F25] text-white px-4 py-1.5 text-xs font-mono tracking-wider uppercase flex justify-between items-center">
		<div class="container mx-auto flex justify-between items-center">
			<span class="flex items-center gap-2">
				<span class="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
				<span>PHMSA 49 CFR 192 & 195 | Remote Proctoring Now Available Nationwide</span>
			</span>
			<a href="tel:{COMPANY_INFO.phoneRaw}" class="hidden sm:inline-flex items-center gap-1.5 font-bold hover:underline">
				<span>CALL DIRECT: {COMPANY_INFO.phone}</span>
			</a>
		</div>
	</div>

	<!-- Main Navigation -->
	<div class="container mx-auto px-4 py-3.5 flex items-center justify-between">
		<!-- Brand Logo -->
		<a href="/" class="flex items-center gap-3 group">
			<div class="w-10 h-10 bg-[#D22F25] flex items-center justify-center font-heading font-black text-xl text-white tracking-tighter border border-white/20">
				OQ
			</div>
			<div>
				<div class="font-heading font-black tracking-tight text-xl leading-none text-white group-hover:text-[#D22F25] transition-colors">
					NEED OQ<span class="text-[#D22F25]">.</span>
				</div>
				<div class="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
					By Safe Hands Safety
				</div>
			</div>
		</a>

		<!-- Desktop Navigation Links -->
		<nav class="hidden lg:flex items-center gap-7 text-sm font-medium">
			<a href="#services" class="text-slate-300 hover:text-white transition-colors">Platforms & OQ</a>
			<a href="#tasks" class="text-slate-300 hover:text-white transition-colors">Covered Tasks</a>
			<a href="#locations" class="text-slate-300 hover:text-white transition-colors">Training Centers</a>
			<a href="#accreditations" class="text-slate-300 hover:text-white transition-colors">Accreditations</a>
			<a href="#faq" class="text-slate-300 hover:text-white transition-colors">OQ FAQ</a>
		</nav>

		<!-- Actions -->
		<div class="hidden sm:flex items-center gap-4">
			<a
				href="tel:{COMPANY_INFO.phoneRaw}"
				class="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5"
			>
				<svg class="w-4 h-4 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
				<span>{COMPANY_INFO.phone}</span>
			</a>
			<a
				href="#quote"
				class="bg-[#D22F25] hover:bg-[#EB392F] text-white px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-sm hover:-translate-y-0.5"
			>
				Request OQ Quote
			</a>
		</div>

		<!-- Mobile Hamburger -->
		<button
			onclick={toggleMenu}
			type="button"
			class="lg:hidden p-2 text-slate-400 hover:text-white"
			aria-label="Toggle navigation menu"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile dropdown -->
	{#if mobileMenuOpen}
		<div class="lg:hidden bg-[#111111] border-b border-[#262626] px-4 py-4 space-y-3">
			<a
				href="#services"
				onclick={() => (mobileMenuOpen = false)}
				class="block text-slate-200 text-sm font-medium py-1.5 hover:text-white"
			>
				Platforms & OQ
			</a>
			<a
				href="#tasks"
				onclick={() => (mobileMenuOpen = false)}
				class="block text-slate-200 text-sm font-medium py-1.5 hover:text-white"
			>
				Covered Tasks
			</a>
			<a
				href="#locations"
				onclick={() => (mobileMenuOpen = false)}
				class="block text-slate-200 text-sm font-medium py-1.5 hover:text-white"
			>
				Training Centers
			</a>
			<a
				href="#accreditations"
				onclick={() => (mobileMenuOpen = false)}
				class="block text-slate-200 text-sm font-medium py-1.5 hover:text-white"
			>
				Accreditations
			</a>
			<a
				href="#faq"
				onclick={() => (mobileMenuOpen = false)}
				class="block text-slate-200 text-sm font-medium py-1.5 hover:text-white"
			>
				OQ FAQ
			</a>
			<div class="pt-3 border-t border-[#262626] flex flex-col gap-2">
				<a
					href="tel:{COMPANY_INFO.phoneRaw}"
					class="text-xs font-mono text-[#D22F25] font-bold py-1"
				>
					Direct Line: {COMPANY_INFO.phone}
				</a>
				<a
					href="#quote"
					onclick={() => (mobileMenuOpen = false)}
					class="w-full text-center bg-[#D22F25] text-white py-2.5 text-xs font-mono uppercase tracking-wider font-bold"
				>
					Request OQ Quote
				</a>
			</div>
		</div>
	{/if}
</header>
