<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let { children } = $props();

	const canonicalUrl = $derived(
		'https://needoq.com' + (page.url.pathname === '/' ? '/' : page.url.pathname.replace(/\/$/, ''))
	);

	const localBusinessJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': ['LocalBusiness', 'ProfessionalService', 'EducationalOrganization'],
				'@id': 'https://needoq.com/#business',
				name: 'Need OQ by Safe Hands Safety',
				alternateName: ['Need OQ', 'NeedOQ'],
				url: 'https://needoq.com',
				description:
					'Nationwide Operator Qualification (OQ) evaluations, NCCER Master Evaluator certifications, Veriforce, EWN, and remote proctoring under PHMSA 49 CFR 192/195.',
				telephone: '+1-432-231-2207',
				email: 'JulioMartinez@SafeHandsSafety.com',
				address: {
					'@type': 'PostalAddress',
					streetAddress: '5301 Cholla Rd',
					addressLocality: 'Midland',
					addressRegion: 'TX',
					postalCode: '79706',
					addressCountry: 'US'
				},
				parentOrganization: {
					'@type': 'Organization',
					name: 'Safe Hands Safety',
					telephone: '+1-432-231-2207'
				}
			},
			{
				'@type': 'WebSite',
				'@id': 'https://needoq.com/#website',
				url: 'https://needoq.com',
				name: 'Need OQ'
			}
		]
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:url" content={canonicalUrl} />
	{@html `<script type="application/ld+json">${localBusinessJsonLd}</script>`}
</svelte:head>

{#key page.url.pathname}
	<div in:fade={{ duration: 200, delay: 40 }} out:fade={{ duration: 140 }}>
		{@render children()}
	</div>
{/key}
