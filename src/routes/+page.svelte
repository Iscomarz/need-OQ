<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ValueProps from '$lib/components/ValueProps.svelte';
	import PlatformsSection from '$lib/components/PlatformsSection.svelte';
	import CoveredTasksSection from '$lib/components/CoveredTasksSection.svelte';
	import AccreditationsMarquee from '$lib/components/AccreditationsMarquee.svelte';
	import LocationsSection from '$lib/components/LocationsSection.svelte';
	import FaqSection from '$lib/components/FaqSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Need OQ | Pipeline Operator Qualification (OQ) Evaluations &amp; Training</title>
	<meta
		name="description"
		content="Nationwide Operator Qualification (OQ) training, testing, and performance evaluations for PHMSA 49 CFR 192/195. Mobile labs, ATAC centers &amp; remote proctoring."
	/>
</svelte:head>

<div class="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans selection:bg-[#D22F25] selection:text-white">
	<Navbar />
	<main>
		<Hero />
		<ValueProps />
		<PlatformsSection />
		<CoveredTasksSection />
		<AccreditationsMarquee />
		<LocationsSection />
		<FaqSection />
		<QuoteSection />
	</main>
	<Footer />
</div>
