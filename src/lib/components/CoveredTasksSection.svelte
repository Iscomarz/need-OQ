<script lang="ts">
	import { COMMON_COVERED_TASKS } from '$lib/data/content';

	let searchQuery = $state('');
	let selectedCategory = $state('All');

	const categories = ['All', 'Breakout Tanks', 'Piping & Valves', 'Inspection & Integrity', 'General'];

	const filteredTasks = $derived(
		COMMON_COVERED_TASKS.filter((task) => {
			const matchesCategory = selectedCategory === 'All' || task.category === selectedCategory;
			const query = searchQuery.toLowerCase().trim();
			const matchesSearch =
				!query ||
				task.title.toLowerCase().includes(query) ||
				task.code.toLowerCase().includes(query) ||
				task.description.toLowerCase().includes(query);
			return matchesCategory && matchesSearch;
		})
	);
</script>

<section id="tasks" class="py-20 bg-[#F8F9FA] border-b border-[#E2E8F0]">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mb-10">
			<div class="text-xs font-mono uppercase tracking-widest text-[#D22F25] font-bold mb-2">
				Task Matrix &amp; Evaluation Catalog
			</div>
			<h2 class="text-3xl sm:text-4xl font-heading font-black uppercase text-[#0F172A] tracking-tight mb-4">
				COMMON COVERED TASKS (CCTS)
			</h2>
			<p class="text-slate-600 text-base leading-relaxed">
				Covering hundreds of tasks under 49 CFR Part 192 (Natural Gas) &amp; Part 195 (Hazardous Liquids), from industry-standard CCTs to custom operator-specific qualification requirements.
			</p>
		</div>

		<!-- Interactive Filter & Search Controls -->
		<div class="bg-white p-4 industrial-box mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
			<!-- Category Tabs -->
			<div class="flex flex-wrap gap-2 w-full md:w-auto">
				{#each categories as cat}
					<button
						type="button"
						onclick={() => (selectedCategory = cat)}
						class="px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors {selectedCategory === cat ? 'bg-[#0A0A0A] text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
					>
						{cat}
					</button>
				{/each}
			</div>

			<!-- Search input -->
			<div class="w-full md:w-72 relative">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search covered task..."
					class="w-full bg-[#F8F9FA] border border-slate-300 px-3 py-1.5 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#D22F25]"
				/>
				{#if searchQuery}
					<button
						type="button"
						onclick={() => (searchQuery = '')}
						class="absolute right-2.5 top-1.5 text-slate-400 hover:text-slate-600 text-xs font-mono"
					>
						✕
					</button>
				{/if}
			</div>
		</div>

		<!-- Task Cards Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each filteredTasks as task}
				<div class="industrial-card bg-white p-5 flex flex-col justify-between hover:border-[#D22F25] transition-colors">
					<div>
						<div class="flex items-center justify-between mb-2">
							<span class="text-[10px] font-mono font-bold text-[#D22F25] tracking-wider">
								{task.code}
							</span>
							<span class="text-[10px] font-mono text-slate-400 uppercase">
								{task.category}
							</span>
						</div>
						<h3 class="text-base font-heading font-bold text-[#0F172A] mb-2 leading-snug">
							{task.title}
						</h3>
						<p class="text-xs text-slate-600 leading-relaxed font-sans mb-4">
							{task.description}
						</p>
					</div>
					<div class="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
						<span>PHMSA Compliant</span>
						<a href="/quote" class="text-[#D22F25] font-bold hover:underline">
							Evaluate ›
						</a>
					</div>
				</div>
			{/each}
		</div>

		{#if filteredTasks.length === 0}
			<div class="text-center py-12 bg-white industrial-box">
				<p class="text-sm font-mono text-slate-500">No tasks matched your search query "{searchQuery}".</p>
				<button
					type="button"
					onclick={() => { searchQuery = ''; selectedCategory = 'All'; }}
					class="mt-3 text-xs font-mono text-[#D22F25] underline font-bold"
				>
					Reset filters
				</button>
			</div>
		{/if}

		<div class="mt-8 text-center text-xs font-mono text-slate-500">
			Looking for a custom operator-specific task not listed above? We qualify hundreds of additional tasks. 
			<a href="/quote" class="text-[#D22F25] font-bold underline ml-1">Contact our Master Evaluator team</a>.
		</div>
	</div>
</section>
