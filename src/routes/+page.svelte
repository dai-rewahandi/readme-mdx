<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const gsapModule = await import('gsap');
		const gsap = gsapModule.default;
		const { SplitText } = await import('gsap/SplitText');
		gsap.registerPlugin(SplitText);

		gsap.from('.detail > *', {
			opacity: 0,
			y: 100,
			stagger: 0.2,
			ease: 'power2.inOut'
		});
	});

	let { data } = $props();
	const formatedList = [...data.repo].sort(
		(a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
	);
</script>

<div class="detail">
	<h2>Tentang Saya</h2>
	<p>
    Saya Dai Rewahandi, perjalanan saya di dunia pemrograman berawal dari rasa bosan dan keinginan mengisi waktu luang
		di tengah rutinitas lama yang jauh dari teknologi. Menulis kode sempat jadi pelarian yang seru,
		namun hadirnya AI di ranah koding saat ini memberi dinamika baru; kemudahan membuat segalanya
		otomatis justru perlahan membuat saya merasa makin malas untuk mengulik semuanya sendiri dari
		nol.
	</p>

	<h2>Publik Repo</h2>
	<ul>
		{#each formatedList as list}
			<li>
				{list.name}
				<a href={list.html_url}>[disini]</a>
			</li>
		{/each}
	</ul>

	<h2>Kontak</h2>
	<p>
		Untuk informasi lebih lanjut atau jika Anda ingin berkolaborasi, jangan ragu untuk menghubungi
		saya melalui:
	</p>

	<ul>
		<li>
			Instagram: <a href="https://instagram.com/dai.rewahandi"
				>https://instagram.com/dai_rewahandi</a
			>
		</li>
		<li>
			Twitter: <a href="https://twitter.com/dai_rewahandi">https://twitter.com/dai_rewahandi</a>
		</li>
		<li>GitHub: <a href="https://github.com/dai-rewahandi">https://github.com/dai-rewahandi</a></li>
		<li>
			Facebook: <a href="https://facebook.com/dai.rewahandi">https://facebook.com/dai_rewahandi</a>
		</li>
		<li>Email: <a href="mailto:nikrodaire@gmail.com">niktodaire@gmail.com</a></li>
	</ul>
</div>
