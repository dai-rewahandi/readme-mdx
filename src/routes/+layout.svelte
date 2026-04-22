<script lang="ts">
	import Footer from './sections/footer/+page.svelte';
	import Header from './sections/header/+page.svelte';
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Dai_rewahandi</title>
	<meta name="description" content="Personal Website" />
	<link rel="icon" href="src/lib/assets/favicon.ico" type="image/x-icon" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="mx-auto w-[80%] max-w-[900px] text-gray-700">
	<Header />
	{@render children()}
	<Footer />
</main>

<style>
	:global(html),
	:global(body) {
		font-family: 'Raleway', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
</style>
